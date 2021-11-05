import { render, screen } from "@testing-library/react"
import Character from "character_generation/Character"
import { Primary as Abilities } from "./Abilities.stories"

describe("<Abilities />", () => {
  const character = new Character()
  character.generate()

  test("renders a caption", () => {
    render(<Abilities characterOverride={character} />)
    expect(screen.getByText("Ability Scores")).toBeTruthy()
  })

  test("renders a table with the correct headings", () => {
    render(<Abilities characterOverride={character} />)
    const defense = screen.getByRole("cell", { name: "Defense" })
    const ability = screen.getByRole("cell", { name: "Ability" })
    const bonus = screen.getByRole("cell", { name: "Bonus" })

    expect(defense).toBeInTheDocument()
    expect(ability).toBeInTheDocument()
    expect(bonus).toBeInTheDocument()
  })

  const characterAbilities = character.abilityScores

  Object.keys(characterAbilities).forEach((ability: string) => {
    const shortAbility = ability.slice(0, 3)
    const rowName = `${shortAbility}-row`

    describe(`${ability}`, () => {
      test(`renders a ${ability} row`, () => {
        render(<Abilities characterOverride={character} />)
        const row = screen.getByTestId(rowName)
        expect(row).toBeInTheDocument()
      }) // renders a {ability}

      test(`renders the correct values in the ${ability} row`, () => {
        render(<Abilities characterOverride={character} />)
        const abilityValues = characterAbilities[ability as IAbilityName]

        const row = screen.getByTestId(rowName)
        const abilityCells = row.childNodes

        expect(abilityCells[0]).toHaveTextContent(
          abilityValues.defense.toString()
        )
        expect(abilityCells[1]).toHaveTextContent(shortAbility.toUpperCase())
        expect(abilityCells[2]).toHaveTextContent(
          abilityValues.bonus.toString()
        )
      }) // renders the correct values in the {ability} row
    }) // describe {ability}
  })
})
