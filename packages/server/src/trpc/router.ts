import { router } from "./init";
import { userRouter } from "../routers/user";
import { z } from "zod";
import { publicProcedure } from "./init";

export const appRouter = router({
  hello: publicProcedure.input(z.string().optional()).query(({ input }) => {
    return `Hello ${input ?? "World"}`;
  }),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
