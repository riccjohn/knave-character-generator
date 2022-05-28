import { render, screen } from "@testing-library/react"
import { Primary as DataWithLabel } from "./DataWithLabel.stories"

describe("DataWithLabel", () => {
  // let subject
  const label = "Name"
  const value = "Michael Scarn"

  // beforeAll(() => {
  //   subject = render(<DataWithLabel label={label} value={value}) />)
  // })

  test("displays a given label and value together", () => {
    render(<DataWithLabel label={label} value={value} />)
    expect(screen.getByText("foo: bar")).toBeTruthy()
  })
})
