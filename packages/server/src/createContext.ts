import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { PrismaClient } from "@poc/prisma"

const prisma = new PrismaClient({
    log: ['query', 'error', 'warn'],
});

export async function createContext({
    req,
    res,
}: trpcNext.CreateNextContextOptions) {
    return {
        req,
        res,
        prisma,
    };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
