import { userRouter } from "./router/user";
import { router } from "./trpc";
import { base } from "./router/inter-proc/base";
import { extend } from "./router/inter-proc/extend";

export const appRouter = router({
  user: userRouter,

  interProc: router({
    base,
    extend,
  }),
});

export type AppRouter = typeof appRouter;
