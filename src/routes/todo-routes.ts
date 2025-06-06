import { Router } from "express"
import {
  addPostController,
  getTodoController,
  getTodosController,
  removeTodoController,
  updateTodoCompletedController,
  updateTodoController,
} from "../controllers/todo-controller"

export const todoRoutes = Router()

todoRoutes.route("/todos").get(getTodosController).post(addPostController)
todoRoutes
  .route("/todos/:id")
  .get(getTodoController)
  .put(updateTodoController)
  .delete(removeTodoController)
todoRoutes.route("/todos/:id/completed").patch(updateTodoCompletedController)
