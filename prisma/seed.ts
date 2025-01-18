import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Permissions
  const permissions = await prisma.permission.createMany({
    data: [
      { name: "Create" },
      { name: "Edit" },
      { name: "Delete" },
      { name: "View" },
    ],
  });

  // Roles
  const roles = await prisma.role.createMany({
    data: [{ name: "Admin" }, { name: "Author" }, { name: "User" }],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
