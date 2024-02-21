import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe("Greet", () => {
  test("renders corretcly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
  })
})

describe("Nested", () => {
  test("renders a name", () => {
    const userName = "John"

    render(<Greet name={userName} />)
    const textElement = screen.getByText(`Hello ${userName}`)
    expect(textElement).toBeInTheDocument()
  })
})
