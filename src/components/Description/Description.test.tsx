import { render, within } from "@testing-library/react"
import { Character } from "character_generation"
import { Primary as Description } from "./Description.stories"

describe("Description", () => {
  const character = new Character()
  character.generate()
  const { traits } = character

  Object.keys(traits).forEach(trait => {
    test(`displays a trait for ${trait}`, () => {
      const { getByTestId } = render(
        <Description characterOverride={character} />
      )
      const sentenceCaseTrait = trait[0].toUpperCase() + trait.slice(1)
      const adjective = traits[trait as INoun]
      const sentenceCaseAdjective =
        adjective[0].toUpperCase() + adjective.slice(1)

      const description = getByTestId(trait)
      const { getByText } = within(description)

      expect(getByText(`${sentenceCaseTrait}:`)).toBeVisible()
      expect(getByText(`${sentenceCaseAdjective}`)).toBeVisible()
    })
  })
})
