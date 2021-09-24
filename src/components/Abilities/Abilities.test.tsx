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

  const characterAbilities = character.abilityScores;

  Object.keys(characterAbilities).forEach((ability: string) => {
    const shortAbility = ability.slice(0, 3);
    const rowName = `${shortAbility}-row`;

    describe(`${ability}`, () => {
      test(`renders a ${ability} row`, () => {
        const row = screen.getByTestId(rowName);
        expect(row).toBeInTheDocument();
      }); // renders a {ability}

      test(`renders the correct values in the ${ability} row`, () => {
        const abilityValues = characterAbilities[ability as IAbilityName];

        const row = screen.getByTestId(rowName);
        const abilityCells = row.childNodes;

        expect(abilityCells[0]).toHaveTextContent(
          abilityValues.defense.toString()
        );
        expect(abilityCells[1]).toHaveTextContent(shortAbility.toUpperCase());
        expect(abilityCells[2]).toHaveTextContent(
          abilityValues.bonus.toString()
        );
      }); // renders the correct values in the {ability} row
    }); // describe {ability}
  });
});

const renderAbilities = (context: ICharacterContext) => {
  return render(
    <CharacterContext.Provider value={context}>
      <Abilities />
    </CharacterContext.Provider>
  );
};
