import { initTRPC } from "@trpc/server";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

const t = initTRPC.create();

export const baseRouter = t.router({
  hello: t.procedure
    .input((val: unknown): val is string | undefined => true)
    .query(() => "" as string),
});

export type AppRouter = typeof baseRouter;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
