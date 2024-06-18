import { BaseRepository } from './base-repository';
import prisma from '../database';
import { Category, Prisma, Product, ProductCategories } from '@prisma/client';
import { v4 as uuid4 } from 'uuid';

export class ProductCategoriesRepository extends BaseRepository<'ProductCategories'> {
  constructor() {
    super(prisma, 'ProductCategories');
  }

  async create(
    data:
      | Prisma.ProductCategoriesCreateInput
      | Prisma.ProductCategoriesUncheckedCreateInput,
  ): Promise<ProductCategories | null> {
    return await this.prisma.productCategories.create({
      data: {
        ...data,
        id: uuid4(),
      },
    });
  }

  // async createMany(data: Pick<Prisma.ProdCreateManyInput, 'name' | 'image'>[],) {
  //   return await this.prisma.productCategories.createManyAndReturn()
  // }
}
