import Character from "./Character";

describe("Character", () => {
  let character: Character;

  describe("initialization", () => {
    // TODO: mock out Gear class
    beforeEach(() => {
      character = new Character();
    });

    it("sets a default for all abilities", () => {
      const defaultAbility = { bonus: 3, defense: 13 };

      expect(character.charisma).toEqual(defaultAbility);
      expect(character.constitution).toEqual(defaultAbility);
      expect(character.dexterity).toEqual(defaultAbility);
      expect(character.intelligence).toEqual(defaultAbility);
      expect(character.strength).toEqual(defaultAbility);
      expect(character.wisdom).toEqual(defaultAbility);
    });

    it("sets a default for copper pieces", () => {
      expect(character.copperPieces).toEqual(0);
    });

    it("sets a default list of items", () => {
      const defaultItem = { name: "", count: 0, type: "food", slots: 0 };
      expect(character.items).toHaveLength(1);
      expect(character.items[0]).toEqual(defaultItem);
    });

    it("sets a default level of 0", () => {
      expect(character.level).toBe(0);
    });

    it("sets a default max HP of 0", () => {
      expect(character.maxHp).toBe(0);
    });

    it("sets a default gender", () => {
      expect(character.gender).toEqual("non-binary");
    });

    it("sets a default number of item slots", () => {
      expect(character.itemSlots).toEqual(0);
    });
  });

  describe("generate()", () => {
    let generatedCharacter: Character;

    beforeEach(() => {
      generatedCharacter = new Character();
      generatedCharacter.generate();
    });

    it("generates a level 1 character by default", () => {
      expect(generatedCharacter.level).toBe(1);
    });

    describe("abilities", () => {
      describe("charisma", () => {
        it("generates a random charisma", () => {
          expect(generatedCharacter.charisma.bonus).toBeLessThanOrEqual(6);
          expect(generatedCharacter.charisma.bonus).toBeGreaterThanOrEqual(1);
        });

        it("has a charisma defense that is 10 higher than the bonus", () => {
          expect(generatedCharacter.charisma.defense).toEqual(
            generatedCharacter.charisma.bonus + 10
          );
        });
      });

      describe("constitution", () => {
        it("generates a random constitution", () => {
          expect(generatedCharacter.constitution.bonus).toBeLessThanOrEqual(6);
          expect(generatedCharacter.constitution.bonus).toBeGreaterThanOrEqual(
            1
          );
        });

        it("has a constitution defense that is 10 higher than the bonus", () => {
          expect(generatedCharacter.constitution.defense).toEqual(
            generatedCharacter.constitution.bonus + 10
          );
        });
      });

      describe("dexterity", () => {
        it("generates a random dexterity", () => {
          expect(generatedCharacter.dexterity.bonus).toBeLessThanOrEqual(6);
          expect(generatedCharacter.dexterity.bonus).toBeGreaterThanOrEqual(1);
        });

        it("has a dexterity defense that is 10 higher than the bonus", () => {
          expect(generatedCharacter.dexterity.defense).toEqual(
            generatedCharacter.dexterity.bonus + 10
          );
        });
      });

      describe("intelligence", () => {
        it("generates a random intelligence", () => {
          expect(generatedCharacter.intelligence.bonus).toBeLessThanOrEqual(6);
          expect(generatedCharacter.intelligence.bonus).toBeGreaterThanOrEqual(
            1
          );
        });

        it("has a intelligence defense that is 10 higher than the bonus", () => {
          expect(generatedCharacter.intelligence.defense).toEqual(
            generatedCharacter.intelligence.bonus + 10
          );
        });
      });

      describe("strength", () => {
        it("generates a random strength", () => {
          expect(generatedCharacter.strength.bonus).toBeLessThanOrEqual(6);
          expect(generatedCharacter.strength.bonus).toBeGreaterThanOrEqual(1);
        });

        it("has a strength defense that is 10 higher than the bonus", () => {
          expect(generatedCharacter.strength.defense).toEqual(
            generatedCharacter.strength.bonus + 10
          );
        });
      });

      describe("wisdom", () => {
        it("generates a random wisdom", () => {
          expect(generatedCharacter.wisdom.bonus).toBeLessThanOrEqual(6);
          expect(generatedCharacter.wisdom.bonus).toBeGreaterThanOrEqual(1);
        });

        it("has a wisdom defense that is 10 higher than the bonus", () => {
          expect(generatedCharacter.wisdom.defense).toEqual(
            generatedCharacter.wisdom.bonus + 10
          );
        });
      });
    });

    it("has a number of item slots equal to the constitution defense", () => {
      expect(generatedCharacter.itemSlots).toBe(
        generatedCharacter.constitution.defense
      );
    });

    it("has a randomly generated starting copper pieces", () => {
      expect(generatedCharacter.copperPieces).toBeGreaterThanOrEqual(23);
      expect(generatedCharacter.copperPieces).toBeLessThanOrEqual(38);
    });

    it("randomly assigns a gender", () => {
      const genders = [
        "cis-male",
        "cis-female",
        "non-binary",
        "transgender",
        "two-spirit",
        "genderqueer",
        "gender-fluid",
        "gender-neutral",
      ];
      expect(genders).toContain(generatedCharacter.gender);
    });

    it("has a maxHP stat between 1 and 8", () => {
      expect(generatedCharacter.maxHp).toBeGreaterThanOrEqual(1);
      expect(generatedCharacter.maxHp).toBeLessThanOrEqual(8);
    });

    it("generates a list of items", () => {
      expect(generatedCharacter.items.length).toBeGreaterThan(1);
    });

    it("randomly generates armor", () => {
      expect(generatedCharacter.armor).toBeTruthy();
    });
  });
});
