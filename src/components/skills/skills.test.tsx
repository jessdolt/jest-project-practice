import { render, screen } from "@testing-library/react"
import Skills from "./skills"

describe("Skills", () => {
  const skills = ["JavaScript", "TypeScript", "React"]

  test("renders correctly", () => {
    render(<Skills skills={skills} />)

    const skillsElement = screen.getByRole("list")
    expect(skillsElement).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)

    const skillsElement = screen.getAllByRole("listitem")
    expect(skillsElement).toHaveLength(3)
  })

  test("renders Login button", () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole("button", { name: "Login" })
    expect(loginButton).toBeInTheDocument()
  })

  test("Start learning butotn is not rendered", () => {
    render(<Skills skills={skills} />)

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    })

    expect(startLearningButton).not.toBeInTheDocument()
  })

  test("Start learning button is rendered after login", async () => {
    render(<Skills skills={skills} />)

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    )

    expect(startLearningButton).toBeInTheDocument()
  })
})
