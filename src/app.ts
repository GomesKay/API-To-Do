import express from "express"
import cors from "cors"
import { todoRoutes } from "./routes/todo-routes"

export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

app.use(todoRoutes)
