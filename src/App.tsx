import React from "react";
import { TestComponent } from "./components";
import CharacterContext, { ICharacterContext } from "context/CharacterContext";
import Character from "character_generation/Character";

const App: React.FC = () => {
  const character = new Character();
  character.generate();

  const charContext: ICharacterContext = {
    character,
  };

  return (
    <CharacterContext.Provider value={charContext}>
      <div className="App">
        <TestComponent />
      </div>
    </CharacterContext.Provider>
  );
};

export default App;
