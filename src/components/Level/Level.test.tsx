import { render } from "@testing-library/react"
import { Character } from "character_generation"
import { Primary as Level } from "./Level.stories"

jest.mock("character_generation/Character")

describe("Level", () => {
  const character = new Character()
  character.generate()
  const { level } = character

  test("displays the given character's level", () => {
    const { getByText } = render(<Level />)
    expect(getByText(`Level: ${level}`)).toBeTruthy()
  })
})
