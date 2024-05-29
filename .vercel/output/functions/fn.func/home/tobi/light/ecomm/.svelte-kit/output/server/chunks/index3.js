import { relations, desc, sql, eq, and, ne, inArray, gte, like } from "drizzle-orm";
import { env } from "node:process";
import { mysqlTableCreator as mysqlTableCreator$1, serial, varchar, timestamp, uniqueIndex, mysqlEnum, bigint, text, float, int, primaryKey } from "drizzle-orm/mysql-core";
import { z } from "zod";
import { createConnection } from "mysql2";
import { drizzle as drizzle$1 } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
async function mysqlConnection(schema2) {
  const {
    host,
    port,
    user,
    password,
    database,
    rejectUnauthorized,
    automaticMigration
  } = getConstants();
  const connection = createConnection({
    host,
    port,
    user,
    password,
    database,
    ssl: {
      rejectUnauthorized
    }
  });
  const db = drizzle$1(connection, { schema: schema2 });
  if (automaticMigration) {
    await migrate(db, {
      migrationsFolder: "./.migrations"
    });
  }
  return db;
}
function mysqlTableCreator() {
  const { DATABASE_TABLE_PREFIX } = z.object({
    DATABASE_TABLE_PREFIX: z.string()
  }).parse(env);
  return mysqlTableCreator$1((name) => `${DATABASE_TABLE_PREFIX}_${name}`);
}
function getConstants() {
  const constants = z.object({
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.coerce.number(),
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_REJECT_UNAUTHORIZED: z.coerce.number(),
    DATABASE_AUTOMATIC_MIGRATION: z.coerce.number()
  }).parse(env);
  return {
    host: constants.DATABASE_HOST,
    port: constants.DATABASE_PORT,
    user: constants.DATABASE_USER,
    password: constants.DATABASE_PASSWORD,
    database: constants.DATABASE_NAME,
    rejectUnauthorized: Boolean(constants.DATABASE_REJECT_UNAUTHORIZED),
    automaticMigration: Boolean(constants.DATABASE_AUTOMATIC_MIGRATION)
  };
}
const mysqlTable = mysqlTableCreator();
const admins = mysqlTable(
  "admins",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow()
  },
  (table) => ({
    emailIdx: uniqueIndex("email_idx").on(table.email)
  })
);
const users = mysqlTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    role: mysqlEnum("role", ["user", "admin"])
  },
  (table) => ({
    emailIdx: uniqueIndex("email_idx").on(table.email)
  })
);
const adminPasswords = mysqlTable("admin_passwords", {
  id: serial("id").primaryKey(),
  adminId: bigint("admin_id", { mode: "number" }).references(() => admins.id),
  password: varchar("password", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
const categories = mysqlTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  image: varchar("image", { length: 256 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
const products = mysqlTable("products", {
  id: serial("id").primaryKey(),
  categoryId: bigint("category_id", { mode: "number" }).references(
    () => categories.id
  ),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description").notNull(),
  price: float("price").notNull(),
  quantity: int("quantity").notNull(),
  image: varchar("image", { length: 256 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
const orders = mysqlTable("orders", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  phone: varchar("phone", { length: 256 }).notNull(),
  city: varchar("city", { length: 256 }).notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  total: float("total").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
const adminsRelations = relations(admins, ({ one }) => ({
  adminPassword: one(adminPasswords, {
    fields: [admins.id],
    references: [adminPasswords.adminId]
  })
}));
const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products)
}));
const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id]
  }),
  orders: many(productsToOrders)
}));
const ordersRelations = relations(orders, ({ many }) => ({
  products: many(productsToOrders)
}));
const productsToOrders = mysqlTable(
  "products_to_orders",
  {
    productId: bigint("product_id", { mode: "number" }).notNull().references(() => products.id),
    orderId: bigint("order_id", { mode: "number" }).notNull().references(() => orders.id)
  },
  (t) => ({
    pk: primaryKey(t.productId, t.orderId)
  })
);
const productsToOrdersRelations = relations(
  productsToOrders,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToOrders.productId],
      references: [products.id]
    }),
    order: one(orders, {
      fields: [productsToOrders.orderId],
      references: [orders.id]
    })
  })
);
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adminPasswords,
  admins,
  adminsRelations,
  categories,
  categoriesRelations,
  orders,
  ordersRelations,
  products,
  productsRelations,
  productsToOrders,
  productsToOrdersRelations,
  users
}, Symbol.toStringTag, { value: "Module" }));
const drizzle = await mysqlConnection(schema);
class BaseRepository {
  table;
  drizzle = drizzle;
  constructor(table) {
    this.table = table;
  }
  async getMany(params) {
    if (params) {
      const { limit, offset } = params;
      const items2 = await this.drizzle.select().from(this.table).orderBy(desc(this.table.createdAt)).limit(limit).offset(offset);
      const total = await this.count();
      return { items: items2, total };
    }
    const items = await this.drizzle.select().from(this.table);
    return { items };
  }
  async count() {
    const data = await this.drizzle.select({ count: sql`count(${this.table.id})` }).from(this.table);
    return data[0].count;
  }
  async getOne(id) {
    let where;
    if (id) {
      where = eq(this.table.id, id);
    }
    const data = await this.drizzle.select().from(this.table).limit(1).offset(0).where(where);
    return data[0] ? data[0] : void 0;
  }
  async destroy(id) {
    const result = await this.drizzle.delete(this.table).where(eq(this.table.id, id));
    return this.destroyResponse(result, id);
  }
  async getOneByColumn(column, value) {
    const data = await this.drizzle.select().from(this.table).where(eq(column, value));
    return data[0] ? data[0] : void 0;
  }
  async existsWithEqualConstraint(column, value, id) {
    const columnConstraint = eq(column, value);
    let where = and(columnConstraint);
    if (id) {
      where = and(columnConstraint, ne(this.table.id, id));
    }
    return this.exists(where);
  }
  async exists(where) {
    const data = await this.drizzle.select({ id: this.table.id }).from(this.table).where(where).limit(1).offset(0);
    return !!data[0];
  }
  async getAllByInColumn(column, value) {
    return this.drizzle.select().from(this.table).where(inArray(column, value));
  }
  createResponse(result) {
    return {
      id: result[0].insertId
    };
  }
  createManyResponse(result) {
    return drizzle.select({ id: this.table.id }).from(this.table).where(gte(this.table.id, result[0].insertId));
  }
  updateResponse(result, id) {
    return result[0].affectedRows === 0 ? void 0 : { id };
  }
  destroyResponse(result, id) {
    return this.updateResponse(result, id);
  }
}
class AdminRepository extends BaseRepository {
  constructor() {
    super(admins);
  }
  async create(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createResponse(result);
  }
  async update(values, id) {
    const result = await this.drizzle.update(this.table).set(values).where(eq(this.table.id, id));
    return this.updateResponse(result, id);
  }
  emailExists(email, id) {
    return this.existsWithEqualConstraint(this.table.email, email, id);
  }
  getLoginData(email, role) {
    return this.drizzle.query.admins.findFirst({
      with: { adminPassword: true },
      columns: { id: true, name: true, email: true },
      // where: role ? and(eq(this.table.email, email), eq(this.table.role, role)) : eq(this.table.email, email),
      where: eq(this.table.email, email),
      orderBy: desc(this.table.createdAt)
    });
  }
}
class AdminPasswordRepository extends BaseRepository {
  constructor() {
    super(adminPasswords);
  }
  async upsert(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createResponse(result);
  }
}
class ProductRepository extends BaseRepository {
  constructor() {
    super(products);
  }
  async getManyWithCategory({ limit, offset }) {
    const items = await this.drizzle.query.products.findMany({
      limit,
      offset,
      columns: {
        id: true,
        name: true,
        quantity: true,
        price: true,
        image: true
      },
      with: { category: { columns: { id: true, name: true } } },
      orderBy: desc(this.table.createdAt)
    });
    const total = await this.count();
    return { items, total };
  }
  async getManyWithFilter({ limit, offset }, { category: category2, name }) {
    let where;
    if (name && category2) {
      where = and(
        like(this.table.name, `%${name}%`),
        eq(this.table.categoryId, category2)
      );
    } else if (name) {
      where = like(this.table.name, `%${name}%`);
    } else if (category2) {
      where = eq(this.table.categoryId, category2);
    }
    const items = await this.drizzle.query.products.findMany({
      limit,
      offset,
      where,
      columns: {
        id: true,
        name: true,
        quantity: true,
        price: true,
        image: true
      },
      orderBy: desc(this.table.createdAt)
    });
    const data = await this.drizzle.select({ count: sql`count(${this.table.id})` }).from(this.table).where(where);
    return { items, total: data[0].count };
  }
  getAllById(ids) {
    return this.getAllByInColumn(this.table.id, ids);
  }
  getOneForDetail(id) {
    return this.drizzle.query.products.findFirst({
      with: { category: true },
      where: (table, { eq: eq2 }) => eq2(table.id, id)
    });
  }
  isInStock(id, quantity) {
    return this.exists(
      and(gte(this.table.quantity, quantity), eq(this.table.id, id))
    );
  }
  async create(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createResponse(result);
  }
  async createMany(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createManyResponse(result);
  }
  async update(values, id) {
    const result = await this.drizzle.update(this.table).set(values).where(eq(this.table.id, id));
    return this.updateResponse(result, id);
  }
}
class CategoryRepository extends BaseRepository {
  constructor() {
    super(categories);
  }
  async create(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createResponse(result);
  }
  async createMany(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createManyResponse(result);
  }
  async update(values, id) {
    const result = await this.drizzle.update(this.table).set(values).where(eq(this.table.id, id));
    return this.updateResponse(result, id);
  }
  getManyWithName() {
    return this.drizzle.query.categories.findMany({
      columns: { id: true, name: true, image: true },
      orderBy: desc(this.table.createdAt)
    });
  }
  idExists(id) {
    return this.existsWithEqualConstraint(this.table.id, id);
  }
}
class OrderRepository extends BaseRepository {
  constructor() {
    super(orders);
  }
  async create(values) {
    const result = await this.drizzle.insert(this.table).values(values);
    return this.createResponse(result);
  }
}
class ProductToOrderRepository {
  table = productsToOrders;
  drizzle = drizzle;
  async create(values) {
    await this.drizzle.insert(this.table).values(values);
  }
}
const admin = new AdminRepository();
const adminPassword = new AdminPasswordRepository();
const product = new ProductRepository();
const category = new CategoryRepository();
const order = new OrderRepository();
const productToOrder = new ProductToOrderRepository();
const repositories = {
  admin,
  adminPassword,
  product,
  category,
  order,
  productToOrder
};
function useRepository(key) {
  return repositories[key];
}
export {
  useRepository as u
};
