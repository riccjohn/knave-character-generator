import React from "react"
import { Abilities, Shell } from "./components"
import Character from "character_generation/Character"
import { Subtitle } from "styledComponents"
import styled from "styled-components"
import Items from "components/Items"

const App: React.FC = () => {
  const character = new Character()
  character.generate()

  return (
    <Shell character={character}>
      <Layout>
        <h1>Knave</h1>
        <Subtitle>Traits</Subtitle>
        <Items />
        <Abilities />
      </Layout>
    </Shell>
  )
}

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

Layout.displayName = "Layout"

export default App
