import { z } from "zod";
import { publicProcedure } from "~/server/trpc";

export const someLogic = async (name: string) => {
  return {
    [name]: "foo" as const,
  };
};

/** base procedure with it's logic extracted out so it can be imported */
export const base = publicProcedure
  .input(
    z.object({
      id: z.number(),
    })
  )
  .query(({ input }) => {
    return someLogic("bar");
  });
