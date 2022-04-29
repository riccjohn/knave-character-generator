import { render } from "@testing-library/react"
import { Character } from "character_generation"
import { Primary as Hitpoints } from "./Hitpoints.stories"

jest.mock("character_generation/Character")

describe("Hitpoints", () => {
  const character = new Character()
  character.generate()
  const { maxHp } = character

  test("displays the component", () => {
    const { getByText } = render(<Hitpoints />)
    expect(getByText(`Hitpoints: ${maxHp}/${maxHp}`)).toBeTruthy()
  })
})
