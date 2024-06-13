import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    // create two dummy phones
    const phone1 = await prisma.phones.create({
      data: {
        model: "A51",
        price: 180,
        brand: "Samsung",
        characteristics: "128 GB AND 6 RAM COLOR BLANCO",
      },
    });

    const phone2 = await prisma.phones.upsert({
      where: { model: 'A51' },
      update: {
        model: 'A51',
        price: 200, // ejemplo de actualización del precio
        brand: 'Samsung',
        characteristics: '128 GB AND 6 RAM COLOR BLANCO',
      },
      create: {
        model: 'A51',
        price: 180,
        brand: 'Samsung',
        characteristics: '128 GB AND 6 RAM COLOR BLANCO',
      },
    });

    console.log({ phone1, phone2 });
  } catch (error) {
    console.error('Error creating or upserting phones:', error);
    throw error; // puedes manejar el error según tu lógica de aplicación
  } finally {
    // cerrar Prisma Client al finalizar
    await prisma.$disconnect();
  }
}

// ejecutar la función principal
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
