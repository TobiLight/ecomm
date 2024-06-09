// import { AdminRepository } from './admin-repository';
// import { ProductRepository } from './product-repository';
// import { CategoryRepository } from './category-repository';
// import { OrderRepository } from './order-repository';
// import { ProductToOrderRepository } from './product-to-order-repository';
import {UserRepository} from "./user-repository"
import prisma from '../database';
import { CategoryRepository } from "./category-repository";
import { ProductRepository } from "./product-repository";
import { OrderRepository } from "./order-repository";
import { ProductToOrderRepository } from "./product-to-order-repository";

// const admin = new AdminRepository();
// const product = new ProductRepository();
// const category = new CategoryRepository();
// const order = new OrderRepository();
const user = new UserRepository()
const category = new CategoryRepository()
const product = new ProductRepository()
const order = new OrderRepository()
const productToOrder = new ProductToOrderRepository();

const repositories = {
  user,
  category,
  product,
  order,
  productToOrder
};

type Repositories = typeof repositories;
type RepositoryKey = keyof Repositories;

export function useRepository<T extends RepositoryKey>(
  key: T,
): Repositories[T] {
  return repositories[key];
}
