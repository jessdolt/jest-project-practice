import { act, renderHook } from "../../test-utils"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test("should accept and render the same initial count", () => {
    const initialCount = 3

    const { result } = renderHook(useCounter, {
      initialProps: { initialCount },
    })

    expect(result.current.count).toBe(initialCount)
  })

  test("should increment the count by 1", () => {
    const { result } = renderHook(useCounter)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })

  test("should decrement the count by 1", () => {
    const { result } = renderHook(useCounter)

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(-1)
  })
})

export {}
