import { t } from '../createRouter';
import { z } from 'zod';

export const itemRouter = t.router({
    add: t.procedure
        .input(
            z.object({
                name: z.string(),
                link: z.string(),
                descripton: z.string().optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.item.create({
                data: {
                    ...input,
                    userId: '3123dd27-6b5c-4499-ba7a-87fe3e6c85d1',
                },
            });
        }),
    all: t.procedure.query(async ({ ctx }) => {
        return await ctx.prisma.item.findMany();
    }),
});
