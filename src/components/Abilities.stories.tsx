import React from "react";
import { Meta } from "@storybook/react";
import { Abilities } from "./";
import CharacterContext from "context/CharacterContext";
import Character from "character_generation/Character";

export default {
  component: Abilities,
  title: "Components/Abilities",
} as Meta;

const character = new Character();
character.generate();

const context = {
  character,
};

export const Primary: React.VFC<{}> = () => {
  return (
    <CharacterContext.Provider value={context}>
      <Abilities />
    </CharacterContext.Provider>
  );
};
