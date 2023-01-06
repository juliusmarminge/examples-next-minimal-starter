import { router } from "~/server/trpc";
import { byId } from "./byId";
import { list } from "./list";

export const userRouter = router({
  byId,
  list,
});
