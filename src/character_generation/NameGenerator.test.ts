import NameGenerator from "./NameGenerator"
import nameData from "character_generation/data/names.json"

describe("NameGenerator", () => {
  describe("firstName()", () => {
    test("given no arguments, generates a first name", () => {
      const firstName = NameGenerator.firstName()
      expect(firstName).toBeDefined()
    })

    test("given no arguments, generates a random first name", () => {
      const randomNames = new Array(25)
        .fill(undefined)
        .map(() => NameGenerator.firstName())
      const uniqueNames = randomNames.filter(
        (name, index, self) => self.indexOf(name) === index
      )

      expect(uniqueNames.length).toBeGreaterThan(1)
    })

    test("given an argument of 'male', generates a random male first name", () => {
      const randomNames = new Array(25)
        .fill(undefined)
        .map(() => NameGenerator.firstName("male"))
      const uniqueNames = randomNames.filter(
        (name, index, self) => self.indexOf(name) === index
      )

      const allMaleName = uniqueNames.every((name: string) =>
        nameData.firstnames.male.includes(name)
      )

      expect(uniqueNames.length).toBeGreaterThan(1)
      expect(allMaleName).toBe(true)
    })

    test("given an argument of 'female', generates a random female first name", () => {
      const randomNames = new Array(25)
        .fill(undefined)
        .map(() => NameGenerator.firstName("female"))
      const uniqueNames = randomNames.filter(
        (name, index, self) => self.indexOf(name) === index
      )

      const allFemaleName = uniqueNames.every((name: string) =>
        nameData.firstnames.female.includes(name)
      )

      expect(uniqueNames.length).toBeGreaterThan(1)
      expect(allFemaleName).toBe(true)
    })

    test("given a gender other than 'male' for 'female', generates a random first name", () => {
      const randomNames = new Array(25)
        .fill(undefined)
        .map(() => NameGenerator.firstName("non-binary"))
      const uniqueNames = randomNames.filter(
        (name, index, self) => self.indexOf(name) === index
      )

      expect(uniqueNames.length).toBeGreaterThan(1)
    })
  })

  describe("surname()", () => {
    test("generates a random surname", () => {
      const randomNames = new Array(25)
        .fill(undefined)
        .map(() => NameGenerator.surname())
      const uniqueNames = randomNames.filter(
        (name, index, self) => self.indexOf(name) === index
      )

      const allSurnames = uniqueNames.every((name: string) =>
        nameData.surnames.includes(name)
      )

      expect(uniqueNames.length).toBeGreaterThan(1)
      expect(allSurnames).toBe(true)
    })
  })
})
