import * as trpc from '@trpc/server';
import superjson from 'superjson';
import { Context } from './createContext';

export const t = trpc.initTRPC.context<Context>().create({
    transformer: superjson,
});
