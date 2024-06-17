import { $Enums, Prisma, PrismaClient, User } from '@prisma/client';
import { BaseRepository } from './base-repository';
import { v4 as uuid4 } from 'uuid';
import prisma from '../database';

export class UserRepository extends BaseRepository<'user'> {
  constructor() {
    super(prisma, 'user');
    // this.prisma.$connect()
  }

  async create(
    data: Prisma.UserCreateInput | Prisma.UserUncheckedCreateInput,
  ): Promise<{
    id: string;
    name: string | null;
    email: string;
    password: string;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
  } | null> {
    try {
      const user = await this.prisma.user.create({
        data: {
          ...data,
          id: uuid4(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      return user;
    } catch (err: any) {
      console.log('error', err);
      return null;
    }
  }

  async emailExists(email: string): Promise<boolean> {
    try {
      let user = await this.prisma.user.findFirst({ where: { email: email } });
      if (user) return true;

      return false;
    } catch (err: any) {
      console.log('an error has occured', err);
      return false;
    }
  }

  async getLoginData(
    email: string,
  ): Promise<Pick<
    User,
    'id' | 'name' | 'email' | 'role' | 'createdAt'
  > | null> {
    try {
      let user = await this.prisma.user.findFirst({
        where: { email: email },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });
      return user;
    } catch (err: any) {
      console.log('an error has occured', err);
      return null;
    }
  }

  async getUserByEmail(email: string) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { email: email },
      });

      return user;
    } catch (err: any) {
      console.error('Error fetching user', err);

      return null;
    }
  }

  async getMany(options?: { where?: Prisma.UserWhereInput; select?: Prisma.UserSelect; include?: unknown; order?: Prisma.UserOrderByWithRelationInput; skip?: number; take?: number }) {
    const { where, select, include, order, skip, take } = options || {};
    
    return await this.prisma.user.findMany({ where, select, skip, take })
  }

  async destroy(id: string): Promise<User | null> {
    return await this.prisma.user.delete({ where: { id } });
  }

  // ... other user-specific methods
}
