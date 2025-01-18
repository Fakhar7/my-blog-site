import { PrismaClient } from '@prisma/client';

export default function prismaClient() {
  return new PrismaClient();
}

// const array = await prismaClient().admin.deleteMany();
// console.log(array);
