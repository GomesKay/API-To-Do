import type { Request, Response } from "express"
import { createTodo, getAllTodos } from "../services/todo-service"
import { bodyTodoSchema } from "../schemas/todo-schema"

export async function getTodosController(req: Request, res: Response) {
  try {
    const todos = await getAllTodos()

    res.status(200).send(todos)
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter as tarefas" })
  }
}

export async function getTodoController() {}

export async function addPostController(req: Request, res: Response) {
  try {
    const { title } = bodyTodoSchema.parse(req.body)
    const newTodo = await createTodo({ title })

    res.status(201).send(newTodo)
  } catch (error) {
    res.status(500).send({ error: "Erro ao criar uma tarefa" })
  }
}

export async function updateTodoController() {}

export async function updateTodoCompletedController() {}

export async function removeTodoController() {}
