import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { NextApiRequest, NextApiResponse } from "next";
import { appRouter } from "~/server/root";
import { createContext } from "~/server/trpc";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ctx = await createContext({ req, res });
  const caller = appRouter.createCaller(ctx);

  try {
    const user = await caller.user.list();
    res.status(200).json({ user });
  } catch (cause) {
    if (cause instanceof TRPCError) {
      const code = getHTTPStatusCodeFromError(cause);
      res.status(code).json({ cause });
    }
    res.status(500).json({ cause, message: "Something went wrong..." });
  }
};
