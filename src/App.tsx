import React from "react"
import { Abilities, BasicInfo, Description, Footer, Shell } from "./components"
import Character from "character_generation/Character"
import { Title } from "styled_components"
import styled from "styled-components"
import Items from "components/Items"

const App: React.FC = () => {
  const character = new Character()
  character.generate()

  return (
    <Shell character={character}>
      <Layout>
        <ContentContainer>
          <Title data-testid="page-title">Knave</Title>
          <BasicInfo />
          <Description />
          <Items />
          <Abilities />
          <Footer />
        </ContentContainer>
      </Layout>
    </Shell>
  )
}

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

Layout.displayName = "Layout"

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`

ContentContainer.displayName = "ContentContainer"

export default App
