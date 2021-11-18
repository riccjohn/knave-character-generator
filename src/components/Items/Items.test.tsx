import { render, screen } from "@testing-library/react"
import Character from "character_generation/Character"
import { Primary as Items } from "./Items.stories"

describe("Items", () => {
  let character: Character

  beforeAll(() => {
    character = new Character()
    character.generate()
  })

  test("renders a subtitle", () => {
    render(<Items />)
    expect(screen.getByText(/Items/)).toBeVisible()
  })

  test("renders the number of item slots used out of the total available", () => {
    render(<Items characterOverride={character} />)

    const { items, itemSlots } = character
    const slotsUsed = items.reduce((acc, curr) => {
      return curr.slots + acc
    }, 0)

    const expectedText = `Item Slots Used: ${slotsUsed}/${itemSlots}`
    const itemSlotText = screen.getByTestId("item-slots-used")

    expect(itemSlotText.textContent).toBe(expectedText)
  })

  test("renders a table with the correct headings", () => {
    render(<Items characterOverride={character} />)
    const item = screen.getByRole("cell", { name: "Item" })
    const defense = screen.getByRole("cell", { name: "Defense" })
    const damage = screen.getByRole("cell", { name: "Damage" })
    const slots = screen.getByRole("cell", { name: "Slots" })

    expect(item).toBeInTheDocument()
    expect(defense).toBeInTheDocument()
    expect(damage).toBeInTheDocument()
    expect(slots).toBeInTheDocument()
  })
})
