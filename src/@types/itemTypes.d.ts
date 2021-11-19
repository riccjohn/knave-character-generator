interface IGear {
  count: number
  name: string
  slots: number
  type: IGearType
}

interface IArmor extends IGear {
  quality: number
  defense: number
}

interface IWeapon extends IGear {
  damage: string
  hand: number
  quality: number
}

type IGearType = "food" | "tool" | "light" | "armor" | "weapon"
