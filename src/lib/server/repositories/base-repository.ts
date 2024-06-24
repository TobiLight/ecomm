import {
  Category,
  Order,
  Prisma,
  PrismaClient,
  Product,
  ProductToOrder,
  User,
} from '@prisma/client';

interface PrismaModelMapping {
  User: User;
  Category: Category;
  Product: Product;
  Order: Order;
  ProductToOrder: ProductToOrder;
}

export type ModelTypes = {
  User: {
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
    Return: Prisma.UserGetPayload;
  };

  Product: {
    Where: Prisma.ProductWhereInput;
    Select: Prisma.ProductSelect;
    Include: unknown;
    Create: Prisma.ProductCreateInput | Prisma.ProductUncheckedCreateInput;
    Update: Prisma.ProductUpdateInput | Prisma.ProductUncheckedUpdateInput;
    Cursor: Prisma.ProductWhereUniqueInput;
    Order: Prisma.ProductOrderByWithRelationInput;
    // Delegate: Prisma.UserDelegate<ModelDelegate>;
    GroupBy: Prisma.ProductGroupByOutputType;
    // @ts-ignore
    Return: Prisma.ProductGetPayload;
  };

  Category: {
    Where: Prisma.CategoryWhereInput;
    Select: Prisma.CategorySelect;
    Include: unknown;
    Create: Prisma.CategoryCreateInput | Prisma.CategoryUncheckedCreateInput;
    Update: Prisma.CategoryUpdateInput | Prisma.CategoryUncheckedUpdateInput;
    Cursor: Prisma.CategoryWhereUniqueInput;
    Order: Prisma.CategoryOrderByWithRelationInput;
    // Delegate: Prisma.UserDelegate<ModelDelegate>;
    GroupBy: Prisma.CategoryGroupByOutputType;
    // @ts-ignore
    Return: Prisma.CategoryGetPayload;
  };

  Order: {
    Where: Prisma.OrderWhereInput;
    Select: Prisma.OrderSelect;
    Include: unknown;
    Create: Prisma.OrderCreateInput | Prisma.OrderUncheckedCreateInput;
    Update: Prisma.OrderUpdateInput | Prisma.OrderUncheckedUpdateInput;
    Cursor: Prisma.OrderWhereUniqueInput;
    Order: Prisma.OrderOrderByWithRelationInput;
    Delegate: Prisma.OrderDelegate;
    GroupBy: Prisma.OrderGroupByOutputType;
    // @ts-ignore
    Return: Prisma.OrderGetPayload;
  };

  ProductToOrder: {
    Where: Prisma.ProductToOrderWhereInput;
    Select: Prisma.ProductToOrderSelect;
    Include: unknown;
    Create:
      | Prisma.ProductToOrderCreateInput
      | Prisma.ProductToOrderUncheckedCreateInput;
    Update:
      | Prisma.ProductToOrderUpdateInput
      | Prisma.ProductToOrderUncheckedUpdateInput;
    Cursor: Prisma.ProductToOrderWhereUniqueInput;
    Order: Prisma.ProductToOrderOrderByWithRelationInput;
    Delegate: Prisma.ProductToOrderDelegate;
    GroupBy: Prisma.ProductToOrderGroupByOutputType;
    // @ts-ignore
    Return: Prisma.ProductToOrderGetPayload;
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
    // @ts-ignore
    return await this.prisma[this.modelName].findUnique({ where: { id } });
  }

  async create(
    data: PrismaModelMapping[T]
  ): Promise<PrismaModelMapping[T] | null> {
    // @ts-ignore
    return await this.prisma[this.modelName].create({ data });
  }

  async deleteOne(id: string) {
    // @ts-ignore
    return await this.prisma[this.modelName].delete({ where: { id } });
  }

  async update(
    data: Partial<PrismaModelMapping[T]>,
  ): Promise<PrismaModelMapping[T]> {
    // @ts-ignore
    return await this.prisma[this.modelName].update({ where: { id: data.id }, data })
  }

  async getMany(options?: {
    where?: ModelTypes[T]['Where'];
    select?: ModelTypes[T]['Select'];
    include?: ModelTypes[T]['Include'];
    order?: ModelTypes[T]['Order'];
    skip?: number;
    take?: number;
  }): Promise<PrismaModelMapping[T][] | []> {
    const { where, select, include, order, skip, take } = options || {};
    /// @ts-ignore
    return await this.prisma[this.modelName].findMany({
      /// @ts-ignore
      where,
      /// @ts-ignore
      orderBy: order,
      /// @ts-ignore
      select,
      skip,
      take,
      /// @ts-ignore
      include: include,
    });
  }
}
