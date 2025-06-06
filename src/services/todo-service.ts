import { prisma } from "../lib/prisma"
import type { CreateTodoInput } from "../types/todo"

export async function getAllTodos() {
  return await prisma.todo.findMany()
}

export async function getTodoById() {}

export async function createTodo({ title }: CreateTodoInput) {
  return await prisma.todo.create({
    data: { title },
  })
}

export async function updateTodo() {}

export async function updateTodoCompleted() {}

export async function deleteTodo() {}
