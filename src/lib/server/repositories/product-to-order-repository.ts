import type { InferModel } from 'drizzle-orm';
import { productsToOrders } from '$lib/server/database/schema';
import prisma from '$lib/server/database';
import { BaseRepository } from './base-repository';
import { Prisma, Product, ProductToOrder } from '@prisma/client';
import { v4 as uuid4 } from 'uuid';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class ProductToOrderRepository extends BaseRepository<'ProductToOrder'> {
  constructor() {
    super(prisma, 'ProductToOrder');
  }

  async createMany(
    data: Pick<Prisma.ProductToOrderCreateManyInput, 'orderID' | 'productID'>[],
  ) {
    return await this.prisma.productToOrder.createManyAndReturn({
      data: [...data],
      include: {
        order: true,
        product: true,
      },
    });
  }

  async getMany(options?: {
    where?: Prisma.ProductToOrderWhereInput;
    select?: Prisma.ProductToOrderSelect;
    include?: unknown;
    order?: Prisma.ProductToOrderOrderByWithRelationInput;
    skip?: number;
    take?: number;
  }): Promise<Array<ProductToOrder & {product: Pick<Product, "name">}> | []> {
    const { where, select, include, order, skip, take } = options || {};
    return await this.prisma.productToOrder.findMany({
      where,
      orderBy: order,
      skip,
      take,
      include: {
        product: true
      }
    });
  }
}
