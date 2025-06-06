import type { Todo } from "../models/todo-model"

export type GetTodoByIdInput = Pick<Todo, "id">

export type CreateTodoInput = Pick<Todo, "title">

export type UpdateTodoInput = Pick<Todo, "id" | "title">

export type UpdateTodoCompletedInput = Pick<Todo, "id">

export type DeleteTodoInput = Pick<Todo, "id">
