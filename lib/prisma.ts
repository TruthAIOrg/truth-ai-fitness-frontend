import { PrismaClient } from '@prisma/client';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'datas', 'db_planfit_res-20230719.db');

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: `file:${dbPath}`,
      },
    },
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      datasources: {
        db: {
          url: `file:${dbPath}`,
        },
      },
    });
  }
  prisma = global.prisma;
}

export default prisma;
