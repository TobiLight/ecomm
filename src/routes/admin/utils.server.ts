import type { z } from 'zod';
import type { upsertAdminSchema, userSchema } from '$lib/validation';
import { useRepository } from '$lib/server/repositories';
import { hash } from '$lib/authentication/hash';
import { v4 as uuid4 } from 'uuid';
import { User } from '@prisma/client';
import { throwIfNotFound } from '$lib/utils';

// async function savePassword(adminId: number, password?: string) {
//   if (password) {
//     const adminPassword = useRepository('adminPassword');
//     password = await hash.hash(password);
//     await adminPassword.upsert({ password, adminId });
//   }
// }

export async function createUser(
  input: z.infer<typeof userSchema>,
): Promise<User | null> {
  const repo = useRepository('user');
  let admin: Awaited<ReturnType<typeof repo.create>>;

  const id = uuid4();

  let password = await hash.hash(input.password);

  try {
    return await repo.create({
      ...input,
      password,
      role: input.role === 'user' ? 'USER' : 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (err: any) {
    console.log('erorr here:', err);
    return null;
  }
}

export async function upsertUser(input: z.infer<typeof userSchema>) {
  const repository = useRepository('user');

  let admin: Awaited<ReturnType<typeof repository.create>>;

  const { id, ...values } = input;

  if (id) {
    try {
      const result = await repository.update({ id, ...values });
      admin = throwIfNotFound(result);

      return admin;
    } catch (err: any) {
      console.log('error has occured', err);
    }
  }
}

// export async function upsertAdmin(input: z.infer<typeof upsertAdminSchema>) {
//   const repository = useRepository('admin');
// let admin: Awaited<ReturnType<typeof repository.create>>;

//   const { id, password, ...values } = input;

//   if (id) {
// try {
//   const result = await repository.update(values, id);
//   admin = throwIfNotFound(result);

//   return admin;
// } catch (err: any) {
//   console.log('error has occured', err);
// }
//   }

//   const userExists = await repository.emailExists(values.email);

//   if (userExists) throw Error('Record already exists');

//   try {
//     admin = await repository.create(values);
//     await savePassword(admin.id, password);

//     return admin;
//   } catch (err: any) {
//     const error = err as { message: string };

//     return error.message;
//   }
// }
