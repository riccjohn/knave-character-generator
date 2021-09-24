import React from "react";
import CharacterContext from "context/CharacterContext";

const Abilities: React.FC = () => {
  const context = React.useContext(CharacterContext);
  const { character } = context;
  const abilityScores: IAbilities = character.abilityScores;

  const { charisma, constitution, dexterity, intelligence, strength, wisdom } =
    abilityScores;

  return (
    <table>
      <caption>Abilities</caption>
      <thead>
        <tr role="row">
          <th role="cell">Defense</th>
          <th role="cell">Ability</th>
          <th role="cell">Bonus</th>
        </tr>
      </thead>
      <tbody>
        <AbilityRow
          label="STR"
          bonus={strength.bonus}
          defense={strength.defense}
        />
        <AbilityRow
          label="DEX"
          bonus={dexterity.bonus}
          defense={dexterity.defense}
        />
        <AbilityRow
          label="CON"
          bonus={constitution.bonus}
          defense={constitution.defense}
        />
        <AbilityRow
          label="INT"
          bonus={intelligence.bonus}
          defense={intelligence.defense}
        />
        <AbilityRow label="WIS" bonus={wisdom.bonus} defense={wisdom.defense} />
        <AbilityRow
          label="CHA"
          bonus={charisma.bonus}
          defense={charisma.defense}
        />
      </tbody>
    </table>
  );
};

interface IAbilityRowProps {
  defense: number;
  label: string;
  bonus: number;
}

const AbilityRow = (props: IAbilityRowProps) => {
  const { bonus, defense, label } = props;
  const lowerCaseLabel = label.toLowerCase();

  return (
    <tr data-testid={`${lowerCaseLabel}-row`} role="row">
      <td role="cell">{defense}</td>
      <th role="cell">{label}</th>
      <td role="cell">{bonus}</td>
    </tr>
  );
};

export default Abilities;
