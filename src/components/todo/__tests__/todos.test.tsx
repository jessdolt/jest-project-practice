import { act, render, screen } from "../../../test-utils"
import Todos from "../todos"
import user from "@testing-library/user-event"

describe("Todos", () => {
  test("renders todos properly", () => {
    render(<Todos />)

    const headingElement = screen.getByRole("heading", { name: /Todos/i })
    expect(headingElement).toBeInTheDocument()

    const todoInput = screen.getByLabelText(/Write your Todo/i)
    expect(todoInput).toBeInTheDocument()

    const submitButton = screen.getByRole("button", {
      name: /Submit/i,
    })

    expect(submitButton).toBeInTheDocument()
  })

  test("focus navigates in order")

  test("add todos properly", async () => {
    user.setup()

    render(<Todos />)

    const todoInput = screen.getByLabelText(/Write your Todo/i)

    await act(async () => {
      await user.type(todoInput, "Clean house")
    })

    expect(todoInput).toHaveValue("Clean house")

    const submitButton = screen.getByRole("button", {
      name: /Submit/i,
    })

    await act(async () => {
      await user.click(submitButton)
    })

    expect(screen.queryAllByRole("listitem")).toHaveLength(1)
  })
})
