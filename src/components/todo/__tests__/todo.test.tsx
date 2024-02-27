import { render, screen } from "../../../test-utils"
import Todo from "../todo"

describe("Todo", () => {
  test("renders correctly", () => {
    const todo = {
      id: 1,
      value: "Do a laundry",
    }

    render(<Todo id={todo.id} value={todo.value} />)

    const listElement = screen.getByRole("listitem")
    expect(listElement).toBeInTheDocument()
  })
})

export {}
