interface IAbilities {
  charisma: IAbility;
  constitution: IAbility;
  dexterity: IAbility;
  intelligence: IAbility;
  strength: IAbility;
  wisdom: IAbility;
}

interface IAbility {
  bonus: number;
  defense: number;
}

type IGender =
  | "cis-male"
  | "cis-female"
  | "non-binary"
  | "transgender"
  | "two-spirit"
  | "genderqueer"
  | "gender-fluid"
  | "gender-neutral";
