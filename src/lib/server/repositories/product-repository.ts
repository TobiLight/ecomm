import { BaseRepository } from './base-repository';
import prisma from '../database';
import { Category, Prisma, Product } from '@prisma/client';
import { v4 as uuid4 } from 'uuid';

export class ProductRepository extends BaseRepository<'Product'> {
  constructor() {
    super(prisma, 'Product');
  }

  async create(
    data: Prisma.ProductCreateInput | Prisma.ProductUncheckedCreateInput,
  ): Promise<Product | null> {
    return await this.prisma.product.create({
      data: {
        ...data,
        id: uuid4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async createMany(
    data: Pick<
      Prisma.ProductCreateManyInput,
      'name' | 'description' | 'image' | 'price' | 'quantity' | 'categoryId'
    >[],
  ): Promise<Array<Product & { category: Pick<Category, 'name'> }> | []> {
    return await this.prisma.product.createManyAndReturn({
      data: [...data],
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getManyWithCategory(
    args: {
      limit: number;
      offset: number;
    },
    filter?: { name?: string, categoryID?: string },
  ): Promise<
    Array<Product & { category: Pick<Category, 'id' | 'name'> }> | []
  > {
    if (filter && Object.entries(filter).length > 0) {
      return await this.prisma.product.findMany({
        where: { categoryId: filter.categoryID },
        include: {
          category: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    }
    return await this.prisma.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async getOne(
    id: string,
  ): Promise<(Product & { category: Pick<Category, 'id' | 'name'> }) | null> {
    return await this.prisma.product.findFirst({
      where: { id },
      include: {
        category: {
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
}
