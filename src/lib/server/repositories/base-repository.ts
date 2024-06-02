import { Prisma, PrismaClient, User } from '@prisma/client';
import { ModelName } from '../../../repository/prisma-repo';

interface PrismaModelMapping {
  user: User;
}

export type ModelTypes<T = unknown> = {
  user: {
    Where: Prisma.UserWhereInput;
    Select: Prisma.UserSelect;
    Include: unknown;
    Create: Prisma.UserCreateInput | Prisma.UserUncheckedCreateInput;
    Update: Prisma.UserUpdateInput | Prisma.UserUncheckedUpdateInput;
    Cursor: Prisma.UserWhereUniqueInput;
    Order: Prisma.UserOrderByWithRelationInput;
    // Delegate: Prisma.UserDelegate<ModelDelegate>;
    GroupBy: Prisma.UserGroupByOutputType;
    // @ts-ignore
    Return: Prisma.UserGetPayload<T>;
  };
};

export abstract class BaseRepository<T extends keyof PrismaModelMapping> {
  protected prisma: PrismaClient;
  protected modelName: T;
  protected modelType: PrismaModelMapping[T];

  constructor(prisma: PrismaClient, modelName: T) {
    this.prisma = prisma;
    this.modelName = modelName;
    this.modelType = (prisma as PrismaClient & PrismaModelMapping)[modelName]; // Type assertion for mapping access
  }

  async getOne(id: string): Promise<PrismaModelMapping[T] | null> {
    return await this.prisma[this.modelName].findUnique({ where: { id } });
  }

  async create(data: PrismaModelMapping[T]): Promise<PrismaModelMapping[T] | null> {
    return await this.prisma[this.modelName].create({ data });
  }
}
