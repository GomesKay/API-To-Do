import { z } from "zod"

export const bodyTodoSchema = z.object({
  title: z.string(),
})

export const paramsTodoSchema = z.object({
  id: z.string().uuid(),
})
