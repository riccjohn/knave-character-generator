interface IGear {
  count: number;
  name: string;
  slots: number;
  type: IGearType;
}

interface IArmor extends IGear {
  quality: number;
  defense: number;
}

type IGearType = "food" | "tool" | "light" | "armor";
