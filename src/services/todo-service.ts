import { prisma } from "../lib/prisma"
import type {
  CreateTodoInput,
  DeleteTodoInput,
  GetTodoByIdInput,
  UpdateTodoCompletedInput,
  UpdateTodoInput,
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

export async function updateTodo({ id, title }: UpdateTodoInput) {
  return await prisma.todo.update({
    where: { id },
    data: { title },
  })
}

export async function updateTodoCompleted({ id }: UpdateTodoCompletedInput) {
  return await prisma.todo.update({
    where: { id },
    data: { completed: true },
  })
}

export async function deleteTodo({ id }: DeleteTodoInput) {
  return await prisma.todo.delete({
    where: { id },
  })
}
