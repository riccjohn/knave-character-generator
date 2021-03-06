type IAbilities = Record<IAbilityName, IAbility>

type IAbilityName =
  | "charisma"
  | "constitution"
  | "dexterity"
  | "intelligence"
  | "strength"
  | "wisdom"

interface IAbility {
  bonus: number
  defense: number
}

type IGender =
  | "cis-male"
  | "cis-female"
  | "non-binary"
  | "transgender"
  | "two-spirit"
  | "genderqueer"
  | "gender-fluid"
  | "gender-neutral"
