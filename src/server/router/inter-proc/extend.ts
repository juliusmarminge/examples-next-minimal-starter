import { z } from "zod";
import { publicProcedure } from "~/server/trpc";
import { someLogic } from "./base";

/** procedure that extends the base procedure */
export const extend = publicProcedure
  .input(
    z.object({
      id: z.number(),
    })
  )
  .query(({ input }) => {
    const bar = someLogic("bar");

    return {
      ...bar,
      baz: "baz" as const,
    };
  });
