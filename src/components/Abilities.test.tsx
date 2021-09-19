import { render, screen } from "@testing-library/react";
import { Abilities } from "components";

describe("<Abilities />", () => {
  // TODO: Pass context and use non-default scores here!!
  const abilities: { [key: string]: IAbility } = {
    charisma: { bonus: 3, defense: 13 },
    constitution: { bonus: 3, defense: 13 },
    dexterity: { bonus: 3, defense: 13 },
    intelligence: { bonus: 3, defense: 13 },
    strength: { bonus: 3, defense: 13 },
    wisdom: { bonus: 3, defense: 13 },
  };

  beforeEach(() => {
    render(<Abilities />);
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

  describe("ability score rows", () => {
    Object.keys(abilities).forEach((ability: string) => {
      let label: string;
      let abilityRow: HTMLElement;

      beforeEach(() => {
        label = ability.toUpperCase().slice(0, 3);
        abilityRow = screen.getByTestId(`${label.toLowerCase()}-row`);
      });

      test(`renders a ${ability} stat`, () => {
        expect(abilityRow).toBeInTheDocument();
        expect(abilityRow.childElementCount).toBe(3);
      });

      test(`renders the correct cells for ${ability}`, () => {
        const abilityScore = abilities[ability];
        const { childNodes } = abilityRow;

        expect(childNodes[0]).toHaveTextContent(
          abilityScore.defense.toString()
        );
        expect(childNodes[1]).toHaveTextContent(label);
        expect(childNodes[2]).toHaveTextContent(abilityScore.bonus.toString());
      });
    });
  });
});
