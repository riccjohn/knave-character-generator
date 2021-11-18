import { render, screen } from "@testing-library/react"
import App from "./App"

describe("<App />", () => {
  test("displays a page title", () => {
    render(<App />)
    expect(screen.getByText(/Knave/)).toBeVisible()
  })

  test("displays a 'Traits' title", () => {
    render(<App />)
    expect(screen.getByText(/Traits/)).toBeVisible()
  })

  // displays a character description

  xtest("displays an the character's level and hit points", () => {
    render(<App />)
    expect(
      screen.getByText(
        /You are a level \d{1,2} character with \d{1,2} hitpoints./
      )
    ).toBeVisible()
  })

  test("displays an 'Ability Scores' title", () => {
    render(<App />)
    expect(screen.getByText(/Ability Scores/)).toBeVisible()
  })

  describe("Abilities", () => {
    beforeEach(() => {
      render(<App />)
    })

    const abilities = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]

    abilities.forEach((ability: string) => {
      test(`displays a '${ability}' ability`, () => {
        expect(screen.getByText(new RegExp(ability))).toBeVisible()
      })
    })
  })

  test("displays an 'Items' title", () => {
    render(<App />)
    expect(screen.getByText(/Items/)).toBeVisible()
  })

  test("displays the number of item slots used", () => {
    render(<App />)
    expect(screen.getByText(/Item Slots Used:\s\d+\/\d+/g)).toBeVisible()
  })

  xtest("displays a 'Weapon' subtitle", () => {
    render(<App />)
    expect(screen.getByText(/Weapon/)).toBeVisible()
  })

  // displays a select menu to choose a weapon

  // displays a table of items
  describe("displays a table of gear", () => {
    test("with an 'Item' column", () => {
      render(<App />)
      expect(screen.getByText(/^Item$/)).toBeVisible()
    })

    // TODO: fix this query. It's finding the 'defense' column from Abilities too
    xtest("with a 'Defense' column", () => {
      render(<App />)
      expect(screen.getByText(/Defense/)).toBeVisible()
    })

    test("with a 'Damage' column", () => {
      render(<App />)
      expect(screen.getByText(/Damage/)).toBeVisible()
    })

    test("with a 'Slots' column", () => {
      render(<App />)
      expect(screen.getByRole("cell", { name: "Slots" })).toBeVisible()
    })
  })

  // displays a footer
})
