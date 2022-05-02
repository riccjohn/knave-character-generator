import names from "character_generation/data/names.json"
import { Randomization } from "character_generation"

class NameGenerator {
  static firstName(gender?: IGender): string {
    const maleNames = names.firstnames.male
    const femaleNames = names.firstnames.female
    const allNames = [...maleNames, ...femaleNames]

    let nameList: string[]

    switch (gender) {
      case "male":
        nameList = maleNames
        break
      case "female":
        nameList = femaleNames
        break
      default:
        nameList = allNames
        break
    }

    return Randomization.getRandomItem(nameList)
  }

  static surname(): string {
    return Randomization.getRandomItem(names.surnames)
  }
}

export default NameGenerator
