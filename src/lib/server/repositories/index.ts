// import { AdminRepository } from './admin-repository';
// import { ProductRepository } from './product-repository';
// import { CategoryRepository } from './category-repository';
// import { OrderRepository } from './order-repository';
// import { ProductToOrderRepository } from './product-to-order-repository';
import {UserRepository} from "./user-repository"
import prisma from '../database';

// const admin = new AdminRepository();
// const product = new ProductRepository();
// const category = new CategoryRepository();
// const order = new OrderRepository();
// const productToOrder = new ProductToOrderRepository();
const user = new UserRepository(prisma)

const repositories = {
  // admin,
  // product,
  // category,
  // order,
  // productToOrder,
  user
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function useRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
