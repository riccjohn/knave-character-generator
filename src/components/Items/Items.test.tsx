import { render, screen } from "@testing-library/react"
import { Primary as Items } from "./Items.stories"

describe("Items", () => {
  test("renders a subtitle", () => {
    render(<Items />)
    expect(screen.getByText(/Items/)).toBeVisible()
  })
})
