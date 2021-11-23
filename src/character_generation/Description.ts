import traitsData from "character_generation/data/traits.json"
import { Randomization } from "character_generation"

class Description {
  public traits

  constructor() {
    this.traits = this.generateRandomTraits()
  }

  private generateRandomTraits() {
    const nouns: string[] = Object.keys(traitsData)

    const randomTraits: Record<INoun, string> = nouns.reduce(
      (acc: Record<string, string>, curr: string) => {
        acc[curr] = Randomization.getRandomItem(traitsData[curr as INoun])
        return acc
      },
      {}
    )

    return randomTraits
  }
}

export default Description
