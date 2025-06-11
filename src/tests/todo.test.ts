import { mocked } from "jest-mock"
import * as todoService from "../services/todo-service"

jest.mock("../services/todo-service", () => ({
  createTodo: jest.fn(),
  getAllTodos: jest.fn(),
  getTodoById: jest.fn(),
  updateTodo: jest.fn(),
  updateTodoCompleted: jest.fn(),
  deleteTodo: jest.fn(),
}))

const mockedTodoService = mocked(todoService, { shallow: false })

describe("Mock - Todo", () => {
  const mockTodo = {
    id: "1",
    title: "Teste",
    completed: false,
    created_at: new Date(),
    updated_at: new Date(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Deve criar uma tarefa com sucesso", async () => {
    mockedTodoService.createTodo.mockResolvedValueOnce(mockTodo)

    const result = await todoService.createTodo({
      title: "Teste",
    })

    expect(todoService.createTodo).toHaveBeenCalled()
    expect(result).toEqual(mockTodo)
  })

  it("Deve retornar todas as tarefas", async () => {
    mockedTodoService.getAllTodos.mockResolvedValueOnce([mockTodo])

    const result = await todoService.getAllTodos()

    expect(todoService.getAllTodos).toHaveBeenCalled()
    expect(result).toEqual([mockTodo])
  })

  it("Deve retornar tarefa por ID", async () => {
    mockedTodoService.getTodoById.mockResolvedValueOnce(mockTodo)

    const result = await todoService.getTodoById({ id: "1" })

    expect(todoService.getTodoById).toHaveBeenCalledWith({ id: "1" })
    expect(result).toEqual(mockTodo)
  })

  it("Deve atualizar tarefa", async () => {
    mockedTodoService.updateTodo.mockResolvedValueOnce(mockTodo)

    const result = await todoService.updateTodo({
      id: "1",
      title: "Teste Atualizado",
    })

    expect(todoService.updateTodo).toHaveBeenCalledWith({
      id: "1",
      title: "Teste Atualizado",
    })
    expect(result).toEqual(mockTodo)
  })

  it("Deve completar uma tarefa", async () => {
    const updatedMock = { ...mockTodo, completed: true }
    mockedTodoService.updateTodoCompleted.mockResolvedValueOnce(updatedMock)

    const result = await todoService.updateTodoCompleted({ id: "1" })

    expect(todoService.updateTodoCompleted).toHaveBeenCalledWith({ id: "1" })
    expect(result.completed).toBe(true)
  })

  it("Deve deletar uma tarefa", async () => {
    mockedTodoService.deleteTodo.mockResolvedValueOnce(mockTodo)

    const result = await todoService.deleteTodo({ id: "1" })

    expect(todoService.deleteTodo).toHaveBeenCalledWith({ id: "1" })
    expect(result).toEqual(mockTodo)
  })
})
