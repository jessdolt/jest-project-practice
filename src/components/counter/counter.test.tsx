import { act, render, screen } from "@testing-library/react"
import Counter from "./counter"
import user from "@testing-library/user-event"

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />)
    const counterElement = screen.getByRole("heading")
    expect(counterElement).toBeInTheDocument()

    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    })
    expect(buttonElement).toBeInTheDocument()

    const amountInput = screen.getByRole("spinbutton")
    expect(amountInput).toBeInTheDocument()
  })

  test("renders a count of 0", () => {
    render(<Counter />)
    const counterElement = screen.getByRole("heading", { name: "0" })

    expect(counterElement).toBeInTheDocument()
  })

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    })

    await act(async () => {
      await user.click(incrementButton)
    })

    const counterElement = screen.getByRole("heading")
    expect(counterElement).toHaveTextContent("1")
  })

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup()

    render(<Counter />)
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    })

    await act(async () => {
      await user.dblClick(incrementButton)
    })

    const counterElement = screen.getByRole("heading")
    expect(counterElement).toHaveTextContent("2")
  })

  test("renders  a count of 10 after clicking the set button", async () => {
    user.setup()

    render(<Counter />)

    const amountInput = screen.getByRole("spinbutton")

    await act(async () => {
      await user.type(amountInput, "10")
    })

    expect(amountInput).toHaveValue(10)

    const setButtonElement = screen.getByRole("button", { name: "Set" })

    await act(async () => {
      await user.click(setButtonElement)
    })

    const counterElement = screen.getByRole("heading")
    expect(counterElement).toHaveTextContent("10")
    expect(amountInput).toHaveValue(0)
  })

  test("elements are focused in the right order", async () => {
    user.setup()

    render(<Counter />)

    const incrementButton = screen.getByRole("button", { name: "Increment" })
    const amountInput = screen.getByRole("spinbutton")
    const setButton = screen.getByRole("button", { name: "Set" })

    await user.tab()
    expect(incrementButton).toHaveFocus()

    await user.tab()
    expect(amountInput).toHaveFocus()

    await user.tab()
    expect(setButton).toHaveFocus()
  })
})

export {}
