import { screen, render } from "@testing-library/react"
import { Primary as Footer } from "./Footer.stories"

describe("Footer", () => {
  test("displays the component", () => {
    render(<Footer />)
    expect(screen.getByTestId("footer")).toBeVisible()
  })
})
