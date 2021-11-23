import CharacterContext from "context/CharacterContext"
import React, { useContext } from "react"
import { Subtitle } from "styled_components"
import StyledDescription from "./Description.styles"

const Description: React.FC = () => {
  const context = useContext(CharacterContext)
  const { character } = context
  const { traits } = character

  return (
    <StyledDescription>
      <Subtitle>Traits</Subtitle>
      <div className="traits">
        {Object.keys(traits as ITraits).map((trait: string) => {
          const sentenceCaseTrait = trait[0].toUpperCase() + trait.slice(1)
          const adjective = traits[trait as INoun]
          const sentenceCaseAdjective =
            adjective[0].toUpperCase() + adjective.slice(1)

          return (
            <p key={trait} data-testid={trait}>
              <span>{`${sentenceCaseTrait}:`}</span>
              {` ${sentenceCaseAdjective}`}
            </p>
          )
        })}
      </div>
    </StyledDescription>
  )
}

export default Description
