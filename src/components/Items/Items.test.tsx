import { render, screen } from "@testing-library/react"
import Character from "character_generation/Character"
import { Primary as Items } from "./Items.stories"

jest.mock("character_generation/Description")
jest.mock("character_generation/Gear")
jest.mock("character_generation/Randomization")

describe("Items", () => {
  const character: Character = new Character()
  character.generate()

  const { items, itemSlots } = character

  test("renders a subtitle", () => {
    render(<Items />)
    expect(screen.getByText(/Items/)).toBeVisible()
  }) // renders a subtitle

  test("renders the number of item slots used out of the total available", () => {
    render(<Items characterOverride={character} />)

    const slotsUsed = items.reduce((acc, curr) => {
      return curr.slots + acc
    }, 0)

    const expectedText = `Item Slots Used: ${slotsUsed}/${itemSlots}`
    const itemSlotText = screen.getByTestId("item-slots-used")

    expect(itemSlotText.textContent).toBe(expectedText)
  }) // renders the number of item slots used out of the total available"

  test("renders a table with the the correct headings", () => {
    render(<Items characterOverride={character} />)
    const item = screen.getByRole("cell", { name: "Item" })
    const defense = screen.getByRole("cell", { name: "Defense" })
    const damage = screen.getByRole("cell", { name: "Damage" })
    const slots = screen.getByRole("cell", { name: "Slots" })

    expect(item).toBeInTheDocument()
    expect(defense).toBeInTheDocument()
    expect(damage).toBeInTheDocument()
    expect(slots).toBeInTheDocument()
  }) // renders a table with the correct headings

  items.forEach(item => {
    const rowName = `${item.name.toLowerCase().split(" ").join("-")}-row`
    test(`renders a row for ${item.name}`, () => {
      render(<Items characterOverride={character} />)
      const row = screen.getAllByTestId(rowName)

      row.forEach(item => expect(item).toBeVisible())
    }) // renders a row for ${item}
  })
})
