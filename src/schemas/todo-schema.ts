import { z } from "zod";

export const bodyTodoSchema = z.object({
  title: z.string()
})
