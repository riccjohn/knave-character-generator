import { render, screen } from "@testing-library/react";
import Character from "character_generation/Character";
import { Abilities } from "components";
import CharacterContext, { ICharacterContext } from "context/CharacterContext";

describe("<Abilities />", () => {
  const character = new Character();
  character.generate();

  const context = {
    character,
  };

  beforeEach(() => {
    renderAbilities(context);
  });

  test("renders a caption", () => {
    expect(screen.getByText("Abilities")).toBeTruthy();
  });

  test("renders a table with the correct headings", () => {
    const defense = screen.getByRole("cell", { name: "Defense" });
    const ability = screen.getByRole("cell", { name: "Ability" });
    const bonus = screen.getByRole("cell", { name: "Bonus" });

    expect(defense).toBeInTheDocument();
    expect(ability).toBeInTheDocument();
    expect(bonus).toBeInTheDocument();
  });

  describe("charisma row", () => {
    test("renders a charisma ability row", () => {
      const charismaRow = screen.getByTestId("cha-row");
      expect(charismaRow).toBeInTheDocument();
      expect(charismaRow.childElementCount).toBe(3);
    });

    test("renders the correct values in the charisma row", () => {
      const charismaStats = character.charisma;
      const charismaRow = screen.getByTestId("cha-row");
      const charismaCells = charismaRow.childNodes;

      expect(charismaCells[0]).toHaveTextContent(
        charismaStats.defense.toString()
      );
      expect(charismaCells[1]).toHaveTextContent("CHA");
      expect(charismaCells[2]).toHaveTextContent(
        charismaStats.bonus.toString()
      );
    });
  });
});

const renderAbilities = (context: ICharacterContext) => {
  return render(
    <CharacterContext.Provider value={context}>
      <Abilities />
    </CharacterContext.Provider>
  );
};
