import { BaseRepository } from './base-repository';
import prisma from '../database';
import { Category, Prisma, Product } from '@prisma/client';
import { v4 as uuid4 } from 'uuid';

export class ProductRepository extends BaseRepository<'Product'> {
  constructor() {
    super(prisma, 'Product');
  }

  async create(data: {
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    categories?: Array<string>;
  }): Promise<{
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    categories: Category[] | undefined;
    createdAt: Date;
    updatedAt: Date;
  } | null> {
    if (data.categories && data.categories.length) {
      return await this.prisma.product.create({
        data: {
          ...data,
          categories: {
            connect: data.categories.map((category) => {
              return {
                id: category,
              };
            }),
          },
          id: uuid4(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        include: {
          categories: true,
        },
      });
    }

    return await this.prisma.product.create({
      data: {
        ...data,
        categories: undefined,
        id: uuid4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        categories: true,
      },
    });
  }

  // async createMany(
  //   data: Pick<
  //     Prisma.ProductCreateManyInput,
  //     'name' | 'description' | 'image' | 'price' | 'quantity' | 'categoryId'
  //   >[],
  // ): Promise<Array<Product & { categories: Array<Pick<Category, 'name'>> }> | []> {
  //   return await this.prisma.product.createManyAndReturn({
  //     data: [...data],
  //     include: {
  //       categories: {
  //         select: {
  //           categoryName: true,
  //         },
  //       },
  //     },
  //   });
  // }

  async getManyWithCategory(
    args: {
      limit: number;
      offset: number;
    },
    filter?: { name?: string; categoryID?: string },
  ): Promise<
    | Array<
        Product & {
          categories: Array<Pick<Category, 'id' | 'name'>>;
        }
      >
    | []
  > {
    if (filter && Object.entries(filter).length > 0) {
      if (filter.categoryID) {
        return await this.prisma.product.findMany({
          where: {
            categories: {
              some: {
                id: filter.categoryID,
              },
            },
          },
          include: {
            categories: true,
          },
        });
      }

      return await this.prisma.product.findMany({
        where: {
          categories: {
            some: {
              id: filter.categoryID,
              name: filter.name,
            },
          },
        },
        include: {
          categories: true,
        },
      });
    }

    return await this.prisma.product.findMany({
      include: {
        categories: true,
      },
    });
  }

  async getOne(
    id: string,
  ): Promise<
    (Product & { categories: Array<Pick<Category, 'id' | 'name'>> }) | null
  > {
    return await this.prisma.product.findFirst({
      where: { id },
      include: {
        categories: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async isInStock(id: string, quantity: number) {
    return await this.prisma.product.findFirst({
      where: {
        id,
        quantity: {
          gte: quantity,
        },
      },
    });
  }

  async getAllById(ids: string[]): Promise<Product[] | []> {
    let idList = [...ids];
    return await this.prisma.product.findMany({
      where: { id: { in: [...ids] } },
    });
  }

  async deleteOne(id: string): Promise<Product> {
    return await this.prisma.product.delete({ where: { id: id } });
  }

  async update(
    data: Partial<Product>,
    categories: Array<string | undefined> = [],
  ) {
    if (categories && categories.length) {
      return await this.prisma.product.update({
        where: { id: data.id },
        data: {
          ...data,
          categories: {
            connect: categories.map((category) => {
              return {
                id: category,
              };
            }),
          },
        },
      });
    }
    
    return await this.prisma.product.update({ where: { id: data.id }, data });
  }
}
