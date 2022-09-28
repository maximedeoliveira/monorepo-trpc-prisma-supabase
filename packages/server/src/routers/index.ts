import { itemRouter } from './item';
import { t } from '../createRouter';

export const appRouter = t.router({
    item: itemRouter,
});

export type AppRouter = typeof appRouter;
