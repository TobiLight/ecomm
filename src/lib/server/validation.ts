import { useRepository } from './repositories';
import {
  upsertAdminSchema as upsertAdmin,
  upsertProductSchema as upsertProduct,
} from '$lib/validation';

export * from '$lib/validation';

// async function uniqueAdminEmail(email: string, id?: number) {
//   const repository = useRepository('admin');
//   const exists = await repository.emailExists(email);
//   return !exists;
// }

// export const upsertAdminSchema = upsertAdmin
//   .refine(({ id, password }) => Boolean(password || id), {
//     message: 'String must contain at least 1 character(s)',
//     path: ['password'],
//   })
//   .refine(({ email, id }) => uniqueAdminEmail(email, id), {
//     message: 'The email already exists.',
//     path: ['email'],
//   });

// export const upsertProductSchema = upsertProduct.refine(
//   ({ categoryId }) => useRepository('category').idExists(categoryId),
//   {
//     message: 'Invalid cateogry',
//     path: ['categoryId'],
//   },
// );
