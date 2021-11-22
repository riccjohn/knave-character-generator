import * as traitsData from "character_generation/data/traits.json"

class Description {
  public traits

  constructor() {
    this.traits = this.generateRandomTraits()
  }

  private generateRandomTraits() {
    // TODO: Why is 'default' in here?!
    const nouns: string[] = Object.keys(traitsData).filter(
      el => el !== "default"
    )
    console.log("NOUNS ==>", nouns)

    const randomTraits: Record<INoun, string> = nouns.reduce(
      (acc: Record<string, string>, curr: string) => {
        // TODO: Have this actually add an adjective
        acc[curr] = "foo"
        return acc
      },
      {}
    )

    return randomTraits
  }

  // TODO: extract to new class
  private getRandomItem = <T>(list: T[]): T => {
    const length = list.length
    const randomIndex = Math.floor(Math.random() * length)
    return list[randomIndex]
  }
}

export default Description
