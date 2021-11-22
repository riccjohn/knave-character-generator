import Description from "./Description"

describe("Description", () => {
  describe("traits", () => {
    test("generates a physique trait", () => {
      const description = new Description()
      const traits: ITraits = description.traits

      console.log("TRAITS", traits)
      expect(traits.physique).toBeTruthy()
    })
  })
})
