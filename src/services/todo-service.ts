import { prisma } from "../lib/prisma"
import type {
  CreateTodoInput,
  DeleteTodoInput,
  GetTodoByIdInput,
} from "../types/todo"

export async function getAllTodos() {
  return await prisma.todo.findMany()
}

export async function getTodoById({ id }: GetTodoByIdInput) {
  return await prisma.todo.findUnique({
    where: { id },
  })
}

export async function createTodo({ title }: CreateTodoInput) {
  return await prisma.todo.create({
    data: { title },
  })
}

export async function updateTodo() {}

export async function updateTodoCompleted() {}

export async function deleteTodo({ id }: DeleteTodoInput) {
  return await prisma.todo.delete({
    where: { id },
  })
}
