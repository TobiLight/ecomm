import { BaseRepository } from './base-repository';
import prisma from '../database';
import { Order, Prisma, Product } from '@prisma/client';
import { v4 as uuid4 } from 'uuid';

export class OrderRepository extends BaseRepository<'Order'> {
  constructor() {
    super(prisma, 'Order');
  }

  async create(
    data: Prisma.OrderCreateInput | Prisma.OrderUncheckedCreateInput
  ): Promise<Order | null> {
    return await this.prisma.order.create({
      data: {
        ...data,
        id: uuid4(),
        total: data.total
        // createdAt: new Date(),
        // updatedAt: new Date(),
      }
    });
  }

  async getMany(options?: {
    where?: Prisma.OrderWhereInput;
    select?: Prisma.OrderSelect;
    include?: Prisma.OrderInclude;
    order?: Prisma.OrderOrderByWithRelationInput;
    skip?: number;
    take?: number;
  }) {
    const { where, select, include, order, skip, take } = options || {};

    return await this.prisma.order.findMany({
      where,
      orderBy: order,
      skip,
      take,
      include: {
        products: {
          select: {
            product: {
              select: {
                name: true,
                description: true,
                price: true
              },
            },
          },
        },
      },
    });
  }

}
