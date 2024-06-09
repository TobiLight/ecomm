import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { uploadSharp } from '$lib/server/filesystem';
import { useRepository } from '$lib/server/repositories';
import { v4 as uuid4 } from 'uuid';
import { Category } from '@prisma/client';

// Note: Category's index should be match with product's index.
// Otherwise, products will be assign to the wrong category
const categoriesData: Pick<Category, 'id' | 'name' | 'image'>[] = [
  {
    id: uuid4(),
    name: 'All',
    image: 'all',
  },
  {
    id: uuid4(),
    name: 'Sofa',
    image: 'sofa',
  },
  {
    id: uuid4(),
    name: 'Table',
    image: 'table',
  },
  {
    id: uuid4(),
    name: 'Double Bed',
    image: 'double-bed',
  },
  {
    id: uuid4(),
    name: 'Wardrobe',
    image: 'wardrobe',
  },
  {
    id: uuid4(),
    name: 'Dressing Table',
    image: 'dressing-table',
  },
  {
    id: uuid4(),
    name: 'Office Chair',
    image: 'office-chair',
  },
  {
    id: uuid4(),
    name: 'Coffee Table',
    image: 'coffee-table',
  },
];

export async function categories() {
  const data = structuredClone<Pick<Category, | "name" | "image">[]>(categoriesData);

  for await (const category of data) {
    const imagePath = getFileInCurrentDirectory(
      `category/${category.image}.svg`,
    );

    const image = sharp(imagePath);

    category.image = await uploadSharp(image, 'category');
  }

  const repository = useRepository('category');

  const items = await repository.createMany(data);

  return items;
}

function getFileInCurrentDirectory(filename: string) {
  return join(dirname(fileURLToPath(import.meta.url)), filename);
}
