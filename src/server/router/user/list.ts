import { z } from "zod";
import { publicProcedure } from "~/server/trpc";

export const list = publicProcedure.query(async ({ input }) => {
  return [
    {
      id: 1,
      name: "Bob",
    },
    {
      id: 2,
      name: "Alice",
    },
  ];
});
