import { BaseRepository } from './base-repository';
import { categories } from '$lib/server/database/schema';
import { Prisma, PrismaClient, Category, Product } from '@prisma/client';
import prisma from '../database';
import { v4 as uuid4 } from 'uuid';

export class CategoryRepository extends BaseRepository<'Category'> {
  constructor() {
    super(prisma, 'Category');
  }

  async create(
    data:
      | Pick<Prisma.CategoryCreateInput, 'image' | 'name'>
      | Prisma.CategoryUncheckedCreateInput,
  ): Promise<Category | null> {
    return await this.prisma.category.create({
      data: {
        ...data,
        id: uuid4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async createMany(
    data: Pick<Prisma.CategoryCreateManyInput, 'name' | 'image'>[],
  ): Promise<Category[] | []> {
    return await this.prisma.category.createManyAndReturn({
      data: [...data],
    });
  }

  async getMany(options?: {
    where?: Prisma.CategoryWhereInput;
    select?: Prisma.CategorySelect;
    include?: unknown;
    order?: Prisma.CategoryOrderByWithRelationInput;
    skip?: number;
    take?: number;
  }): Promise<Category[] | []> {
    const { where, select, include, order, skip, take } = options || {};
    return await this.prisma.category.findMany({
      where,
      orderBy: [
        {
          createdAt: "asc"
        }
      ],
      select,
      skip,
      take,
    });
  }

  async getOne(id: string): Promise<Category & {products: Product[]} | null> {
    return await this.prisma.category.findUnique({
      where: { id },
      include: { products: true },
    });
  }

  async update(data: {
    id: string;
    name: string;
    image: string;
  }): Promise<Category> {
    return await this.prisma.category.update({ where: { id: data.id }, data });
  }

  async deleteOne(id: string): Promise<Category> {
    return await this.prisma.category.delete({
      where: {
        id: id,
      },
      include: { products: true },
    });
  }
}
