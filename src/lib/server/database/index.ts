import { PrismaClient } from "@prisma/client";

interface DBGlobal {
    prisma: PrismaClient
}

declare const global: DBGlobal

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma