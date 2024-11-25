import { router, publicProcedure } from "../trpc/init";
import { z } from "zod";

export const userRouter = router({
  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string().min(2),
      })
    )
    .mutation(async ({ input }) => {
      return { id: "1", ...input };
    }),

  getById: publicProcedure.input(z.string()).query(async ({ input }) => {
    return { id: input, name: "Test User", email: "test@example.com" };
  }),
});
