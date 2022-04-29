import { render, screen } from "@testing-library/react"
import { Primary as BasicInfo } from "./BasicInfo.stories"

describe("BasicInfo", () => {
  beforeEach(() => {
    render(<BasicInfo />)
  })

  test("displays the character's level", () => {
    expect(screen.getByText(/Level: \d{1,2}/)).toBeVisible()
  })

  test("displays the character's HP", () => {
    expect(screen.getByText(/Hitpoints: \d{1,2}\/\d{1,2}/)).toBeVisible()
  })
})
