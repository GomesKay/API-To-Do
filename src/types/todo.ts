import type { Todo } from "../models/todo-model"

export type CreateTodoInput = Pick<Todo, "title">
