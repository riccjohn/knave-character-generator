import { render, screen } from "@testing-library/react"
import App from "./App"

describe("<App />", () => {
  test("displays a page title", () => {
    render(<App />)
    expect(screen.getByTestId("page-title")).toBeVisible()
  })

  test("displays the character's level", () => {
    render(<App />)
    expect(screen.getByText(/Level: \d{1,2}/)).toBeVisible()
  })

  test("displays the character's HP", () => {
    render(<App />)
    expect(screen.getByText(/Hitpoints: \d{1,2}\/\d{1,2}/)).toBeVisible()
  })

  test("displays a 'Traits' title", () => {
    render(<App />)
    expect(screen.getByText(/Traits/)).toBeVisible()
  })

  test("displays a list of traits", () => {
    render(<App />)

    expect(screen.getByText(/Physique:/)).toBeVisible()
    expect(screen.getByText(/Face:/)).toBeVisible()
    expect(screen.getByText(/Skin:/)).toBeVisible()
    expect(screen.getByText(/Hair:/)).toBeVisible()
    expect(screen.getByText(/Clothing:/)).toBeVisible()
    expect(screen.getByText(/Virtue:/)).toBeVisible()
    expect(screen.getByText(/Vice:/)).toBeVisible()
    expect(screen.getByText(/Speech:/)).toBeVisible()
    expect(screen.getByText(/Background:/)).toBeVisible()
    expect(screen.getByText(/Misfortune:/)).toBeVisible()
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
    expect(screen.getByText(/Item Slots Used:\s\d+\/\d+/)).toBeVisible()
  })

  xtest("displays a 'Weapon' subtitle", () => {
    render(<App />)
    expect(screen.getByText(/Weapon/)).toBeVisible()
  })

  // displays a select menu to choose a weapon

  describe("displays a table of gear", () => {
    test("with an 'Item' column", () => {
      render(<App />)
      expect(screen.getByText(/^Item$/)).toBeVisible()
    })

    // TODO: fix this query. It's finding the 'defense' column from Abilities too
    test("with a 'Defense' column", () => {
      render(<App />)
      expect(screen.getByTestId(/item-defense-heading/)).toBeVisible()
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
  test("displays a footer", () => {
    render(<App />)
    expect(screen.getByText(/Ben Milton/)).toBeVisible()
    expect(screen.getByText(/John Riccardi/)).toBeVisible()
  })
})
