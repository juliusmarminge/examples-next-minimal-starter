import { z } from "zod";
import { publicProcedure } from "~/server/trpc";

export const byId = publicProcedure
  .input(
    z.object({
      id: z.number(),
    })
  )
  .query(async ({ input }) => {
    return {
      id: input.id,
      name: "Bob",
    };
  });
