import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { uploadSharp } from '$lib/server/filesystem';
import { useRepository } from '$lib/server/repositories';
import { Category, Prisma, Product } from '@prisma/client';

// Note: Product's index should be match with category's index.
// Otherwise, products will be assign to the wrong category
const productsData: Pick<
  Product,
  'name' | 'description' | 'price' | 'quantity' | 'image' | 'categoryId'
>[][] = [
  // Sofa
  [
    {
      name: 'Comfy Sofa 1',
      description: 'A comfortable sofa for your living room.',
      price: 599.0,
      quantity: 10,
      image: 'sofa-1',
      categoryId: 'sdfgh',
    },
    {
      name: 'Comfy Sofa 2',
      description: 'Another comfortable sofa for your living room.',
      price: 699,
      quantity: 10,
      image: 'sofa-2',
      categoryId: 'sdfgh',
    },
    {
      name: 'Soft Leather Sofa',
      description: 'A luxurious soft leather sofa for your home.',
      price: 999,
      quantity: 10,
      image: 'sofa-3',
      categoryId: 'sdfgh',
    },
    {
      name: 'Modern Sectional Sofa',
      description: 'A modern sectional sofa for your stylish living room.',
      price: 799,
      quantity: 10,
      image: 'sofa-4',
      categoryId: 'sdfgh',
    },
    {
      name: 'Convertible Sleeper Sofa',
      description: 'A practical convertible sleeper sofa for guests.',
      price: 799,
      quantity: 10,
      image: 'sofa-5',
      categoryId: 'sdfgh',
    },
    {
      name: 'Reclining Sofa',
      description: 'A cozy reclining sofa for movie nights.',
      price: 899,
      quantity: 10,
      image: 'sofa-6',
      categoryId: 'sdfgh',
    },
    {
      name: 'Mid-Century Sofa',
      description: 'A classic mid-century sofa for a retro look.',
      price: 749,
      quantity: 10,
      image: 'sofa-7',
      categoryId: 'sdfgh',
    },
    {
      name: 'L-Shaped Sofa',
      description: 'A spacious L-shaped sofa for larger living rooms.',
      price: 899,
      quantity: 10,
      image: 'sofa-8',
      categoryId: 'sdfgh',
    },
    {
      name: 'Velvet Tufted Sofa',
      description: 'A stylish velvet tufted sofa for a touch of elegance.',
      price: 999,
      quantity: 10,
      image: 'sofa-9',
      categoryId: 'sdfgh',
    },
    {
      name: 'Fabric Loveseat',
      description: 'A cozy fabric loveseat for small spaces.',
      price: 499,
      quantity: 10,
      image: 'sofa-10',
      categoryId: 'sdfgh',
    },
  ],

  // // Table
  // [
  //   {
  //     name: 'Wooden Dining Table 1',
  //     description: 'A sturdy wooden dining table for your family gatherings.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'table-1',
  //   },
  //   {
  //     name: 'Wooden Dining Table 2',
  //     description:
  //       'Another sturdy wooden dining table for your family gatherings.',
  //     price: 499,
  //     quantity: 10,
  //     image: 'table-2',
  //   },
  //   {
  //     name: 'Glass Top Dining Table',
  //     description: 'A modern glass top dining table for a sleek look.',
  //     price: 699,
  //     quantity: 10,
  //     image: 'table-3',
  //   },
  //   {
  //     name: 'Extendable Dining Table',
  //     description: 'An extendable dining table for accommodating more guests.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'table-4',
  //   },
  //   {
  //     name: 'Marble Dining Table',
  //     description: 'A luxurious marble dining table for elegant dinners.',
  //     price: 999,
  //     quantity: 10,
  //     image: 'table-5',
  //   },
  //   {
  //     name: 'Farmhouse Dining Table',
  //     description: 'A rustic farmhouse dining table for a cozy ambiance.',
  //     price: 649,
  //     quantity: 10,
  //     image: 'table-6',
  //   },
  //   {
  //     name: 'Round Pedestal Dining Table',
  //     description: 'A classic round pedestal dining table for small spaces.',
  //     price: 599,
  //     quantity: 10,
  //     image: 'table-7',
  //   },
  //   {
  //     name: 'Industrial Dining Table',
  //     description: 'An industrial style dining table for a trendy look.',
  //     price: 749,
  //     quantity: 10,
  //     image: 'table-8',
  //   },
  //   {
  //     name: 'Folding Dining Table',
  //     description: 'A practical folding dining table for occasional use.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'table-9',
  //   },
  //   {
  //     name: 'Bar Height Dining Table',
  //     description: 'A bar height dining table for casual dining.',
  //     price: 549,
  //     quantity: 10,
  //     image: 'table-10',
  //   },
  // ],

  // // Double Bed
  // [
  //   {
  //     name: 'King Size Double Bed 1',
  //     description: "A luxurious king size double bed for a good night's sleep.",
  //     price: 899,
  //     quantity: 10,
  //     image: 'double-bed-1',
  //   },
  //   {
  //     name: 'King Size Double Bed 2',
  //     description:
  //       "Another luxurious king size double bed for a good night's sleep.",
  //     price: 999,
  //     quantity: 10,
  //     image: 'double-bed-2',
  //   },
  //   {
  //     name: 'Queen Size Double Bed',
  //     description: 'A comfortable queen size double bed for couples.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'double-bed-3',
  //   },
  //   {
  //     name: 'Platform Double Bed',
  //     description: 'A platform double bed for a modern bedroom.',
  //     price: 849,
  //     quantity: 10,
  //     image: 'double-bed-4',
  //   },
  //   {
  //     name: 'Wooden Double Bed',
  //     description: 'A classic wooden double bed for timeless elegance.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'double-bed-5',
  //   },
  //   {
  //     name: 'Upholstered Double Bed',
  //     description: 'An upholstered double bed for a soft and cozy feel.',
  //     price: 899,
  //     quantity: 10,
  //     image: 'double-bed-6',
  //   },
  //   {
  //     name: 'Storage Double Bed',
  //     description: 'A double bed with storage drawers for extra convenience.',
  //     price: 999,
  //     quantity: 10,
  //     image: 'double-bed-7',
  //   },
  //   {
  //     name: 'Metal Double Bed',
  //     description: 'A sturdy metal double bed for durability.',
  //     price: 699,
  //     quantity: 10,
  //     image: 'double-bed-8',
  //   },
  //   {
  //     name: 'Fabric Double Bed',
  //     description: 'A fabric double bed for a touch of luxury.',
  //     price: 849,
  //     quantity: 10,
  //     image: 'double-bed-9',
  //   },
  //   {
  //     name: 'Sleigh Double Bed',
  //     description: 'A sleigh-style double bed for a sophisticated look.',
  //     price: 949,
  //     quantity: 10,
  //     image: 'double-bed-10',
  //   },
  // ],

  // // Wardrobe
  // [
  //   {
  //     name: 'Sliding Door Wardrobe 1',
  //     description: 'A spacious sliding door wardrobe for your bedroom.',
  //     price: 899,
  //     quantity: 10,
  //     image: 'wardrobe-1',
  //   },
  //   {
  //     name: 'Sliding Door Wardrobe 2',
  //     description: 'Another spacious sliding door wardrobe for your bedroom.',
  //     price: 999,
  //     quantity: 10,
  //     image: 'wardrobe-2',
  //   },
  //   {
  //     name: 'Walk-In Wardrobe',
  //     description: 'A luxurious walk-in wardrobe for your clothing collection.',
  //     price: 1499,
  //     quantity: 10,
  //     image: 'wardrobe-3',
  //   },
  //   {
  //     name: 'Mirrored Wardrobe',
  //     description: 'A stylish mirrored wardrobe for getting ready in style.',
  //     price: 1199,
  //     quantity: 10,
  //     image: 'wardrobe-4',
  //   },
  //   {
  //     name: 'Built-In Wardrobe',
  //     description: 'A practical built-in wardrobe for maximizing space.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'wardrobe-5',
  //   },
  //   {
  //     name: 'Corner Wardrobe',
  //     description: 'A space-saving corner wardrobe for small bedrooms.',
  //     price: 699,
  //     quantity: 10,
  //     image: 'wardrobe-6',
  //   },
  //   {
  //     name: 'Linen Wardrobe',
  //     description: 'A linen wardrobe for organizing your textiles.',
  //     price: 499,
  //     quantity: 10,
  //     image: 'wardrobe-7',
  //   },
  //   {
  //     name: "Children's Wardrobe",
  //     description: "A fun and colorful wardrobe for kids' rooms.",
  //     price: 399,
  //     quantity: 10,
  //     image: 'wardrobe-8',
  //   },
  //   {
  //     name: 'Wooden Wardrobe',
  //     description: 'A classic wooden wardrobe for timeless elegance.',
  //     price: 899,
  //     quantity: 10,
  //     image: 'wardrobe-9',
  //   },
  //   {
  //     name: 'Vintage Wardrobe',
  //     description: 'A vintage wardrobe for a retro touch.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'wardrobe-10',
  //   },
  // ],

  // // Dressing Table
  // [
  //   {
  //     name: 'Vanity Dressing Table 1',
  //     description: 'A beautiful vanity dressing table with a mirror.',
  //     price: 499,
  //     quantity: 10,
  //     image: 'dressing-table-1',
  //   },
  //   {
  //     name: 'Vanity Dressing Table 2',
  //     description: 'Another beautiful vanity dressing table with a mirror.',
  //     price: 599,
  //     quantity: 10,
  //     image: 'dressing-table-2',
  //   },
  //   {
  //     name: 'Modern Dressing Table',
  //     description: 'A modern dressing table with ample storage.',
  //     price: 699,
  //     quantity: 10,
  //     image: 'dressing-table-3',
  //   },
  //   {
  //     name: 'Makeup Vanity Table',
  //     description: 'A makeup vanity table with Hollywood-style lights.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'dressing-table-4',
  //   },
  //   {
  //     name: 'Compact Dressing Table',
  //     description: 'A compact dressing table for smaller spaces.',
  //     price: 449,
  //     quantity: 10,
  //     image: 'dressing-table-5',
  //   },
  //   {
  //     name: 'Corner Dressing Table',
  //     description: 'A corner dressing table for space-efficient use.',
  //     price: 549,
  //     quantity: 10,
  //     image: 'dressing-table-6',
  //   },
  //   {
  //     name: 'Dressing Table with Drawers',
  //     description:
  //       'A dressing table with drawers for organizing your beauty essentials.',
  //     price: 599,
  //     quantity: 10,
  //     image: 'dressing-table-7',
  //   },
  //   {
  //     name: 'Vintage Dressing Table',
  //     description: 'A vintage dressing table for a touch of nostalgia.',
  //     price: 799,
  //     quantity: 10,
  //     image: 'dressing-table-8',
  //   },
  //   {
  //     name: 'Foldable Dressing Table',
  //     description: 'A foldable dressing table for easy storage.',
  //     price: 349,
  //     quantity: 10,
  //     image: 'dressing-table-9',
  //   },
  //   {
  //     name: 'Glamorous Dressing Table',
  //     description: 'A glamorous dressing table for a luxurious makeup routine.',
  //     price: 899,
  //     quantity: 10,
  //     image: 'dressing-table-10',
  //   },
  // ],

  // // Office Chair
  // [
  //   {
  //     name: 'Ergonomic Office Chair 1',
  //     description: 'An ergonomic office chair for comfortable work hours.',
  //     price: 199,
  //     quantity: 10,
  //     image: 'offcie-chair-1',
  //   },
  //   {
  //     name: 'Ergonomic Office Chair 2',
  //     description: 'Another ergonomic office chair for comfortable work hours.',
  //     price: 249,
  //     quantity: 10,
  //     image: 'offcie-chair-2',
  //   },
  //   {
  //     name: 'Mesh Back Office Chair',
  //     description:
  //       'A breathable mesh back office chair for long hours at the desk.',
  //     price: 299,
  //     quantity: 10,
  //     image: 'offcie-chair-3',
  //   },
  //   {
  //     name: 'Executive Leather Office Chair',
  //     description: 'An executive leather office chair for a professional look.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'offcie-chair-4',
  //   },
  //   {
  //     name: 'Task Office Chair',
  //     description: 'A practical task office chair for versatile use.',
  //     price: 179,
  //     quantity: 10,
  //     image: 'offcie-chair-5',
  //   },
  //   {
  //     name: 'Swivel Office Chair',
  //     description: 'A swivel office chair for easy movement around the desk.',
  //     price: 229,
  //     quantity: 10,
  //     image: 'offcie-chair-6',
  //   },
  //   {
  //     name: 'Modern Office Chair',
  //     description: 'A modern office chair for contemporary workspaces.',
  //     price: 279,
  //     quantity: 10,
  //     image: 'offcie-chair-7',
  //   },
  //   {
  //     name: 'Drafting Office Chair',
  //     description: 'A drafting office chair for elevated workstations.',
  //     price: 249,
  //     quantity: 10,
  //     image: 'offcie-chair-8',
  //   },
  //   {
  //     name: 'Fabric Office Chair',
  //     description: 'A fabric office chair for a cozy and comfortable feel.',
  //     price: 199,
  //     quantity: 10,
  //     image: 'offcie-chair-9',
  //   },
  //   {
  //     name: 'Lumbar Support Office Chair',
  //     description: 'An office chair with lumbar support for better posture.',
  //     price: 299,
  //     quantity: 10,
  //     image: 'offcie-chair-10',
  //   },
  // ],

  // // Coffee Table
  // [
  //   {
  //     name: 'Modern Coffee Table 1',
  //     description: 'A modern coffee table for your living room.',
  //     price: 299,
  //     quantity: 10,
  //     image: 'coffee-table-1',
  //   },
  //   {
  //     name: 'Modern Coffee Table 2',
  //     description: 'Another modern coffee table for your living room.',
  //     price: 349,
  //     quantity: 10,
  //     image: 'coffee-table-2',
  //   },
  //   {
  //     name: 'Wooden Coffee Table',
  //     description: 'A classic wooden coffee table for timeless appeal.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'coffee-table-3',
  //   },
  //   {
  //     name: 'Glass Top Coffee Table',
  //     description: 'A coffee table with a glass top for a contemporary look.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'coffee-table-4',
  //   },
  //   {
  //     name: 'Round Coffee Table',
  //     description: 'A round coffee table for a cozy conversation area.',
  //     price: 299,
  //     quantity: 10,
  //     image: 'coffee-table-5',
  //   },
  //   {
  //     name: 'Marble Coffee Table',
  //     description: 'A luxurious marble coffee table for elegant living rooms.',
  //     price: 449,
  //     quantity: 10,
  //     image: 'coffee-table-6',
  //   },
  //   {
  //     name: 'Industrial Coffee Table',
  //     description: 'An industrial style coffee table for a trendy vibe.',
  //     price: 349,
  //     quantity: 10,
  //     image: 'coffee-table-7',
  //   },
  //   {
  //     name: 'Nested Coffee Tables',
  //     description: 'Nested coffee tables for flexible use and easy storage.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'coffee-table-8',
  //   },
  //   {
  //     name: 'Oval Coffee Table',
  //     description: 'An oval coffee table for a unique focal point.',
  //     price: 349,
  //     quantity: 10,
  //     image: 'coffee-table-9',
  //   },
  //   {
  //     name: 'Farmhouse Coffee Table',
  //     description: 'A rustic farmhouse coffee table for a cozy ambiance.',
  //     price: 399,
  //     quantity: 10,
  //     image: 'coffee-table-10',
  //   },
  // ],
];

export async function products(
  categories: { id: string; name?: string; img?: string }[],
): Promise<Array<Product & { category: Pick<Category, 'name'> }> | []> {
  const data: Pick<
    Product,
    'name' | 'description' | 'image' | 'price' | 'quantity' | 'categoryId'
  >[] = [];

  for await (const [categoryIndex, category] of productsData.entries()) {
    for await (const product of category) {
      const imagePath = getFileInCurrentDirectory(
        `product/${product.image}.png`,
      );

      const image = await uploadSharp(sharp(imagePath), 'product');

      const categoryId = categories[categoryIndex].id;

      data.push({ ...product, image, categoryId });
    }
  }

  const repository = useRepository('product');

  return await repository.createMany(data);
}

function getFileInCurrentDirectory(filename: string) {
  return join(dirname(fileURLToPath(import.meta.url)), filename);
}

function shuffleArray<T>(array: T[]): T[] | T {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
