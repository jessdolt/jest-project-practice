import { render, screen } from "../../test-utils"
import user from "@testing-library/user-event"

import CounterTwo from "./counter-two"

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />)
    const headingElement = screen.getByText("Counter Two")
    expect(headingElement).toBeInTheDocument()

    const counterElement = screen.getByText("0")
    expect(counterElement).toBeInTheDocument()
  })

  test("handlers are called", async () => {
    user.setup()
    const count = 0
    const incrementHandler = jest.fn()
    const decerementHandler = jest.fn()

    render(
      <CounterTwo
        count={count}
        handleIncrement={incrementHandler}
        handleDecrement={decerementHandler}
      />
    )

    const incrementButton = screen.getByRole("button", { name: "Increment" })
    const decrementButton = screen.getByRole("button", { name: "Decrement" })

    await user.click(incrementButton)
    await user.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decerementHandler).toHaveBeenCalledTimes(1)
  })
})

export {}
