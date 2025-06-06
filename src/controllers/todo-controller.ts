import type { Request, Response } from "express"
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
} from "../services/todo-service"
import { bodyTodoSchema, paramsTodoSchema } from "../schemas/todo-schema"

export async function getTodosController(req: Request, res: Response) {
  try {
    const tasks = await getAllTodos()

    res.status(200).send(tasks)
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter as tarefas" })
  }
}

export async function getTodoController(req: Request, res: Response) {
  try {
    const { id } = paramsTodoSchema.parse(req.params)
    const task = await getTodoById({ id })

    res.status(200).send(task)
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter a tarefa" })
  }
}

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

export async function removeTodoController(req: Request, res: Response) {
  try {
    const { id } = paramsTodoSchema.parse(req.params)
    await deleteTodo({ id })

    res.status(200).send({ message: "Tarefa deletada" })
  } catch (error) {
    res.status(500).send({ error: "Erro ao deletar tarefa" })
  }
}
