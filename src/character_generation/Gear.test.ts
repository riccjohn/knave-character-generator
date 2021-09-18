import * as armorList from "./data/armor.json";
import * as gearList from "./data/gear.json";
import Gear from "./Gear";

describe("Gear", () => {
  // TODO: mock out data json
  const itemSlots = 12;
  let gear: Gear;

  beforeEach(() => {
    gear = new Gear(itemSlots);
  });

  describe("initialization", () => {
    test("sets the max item slots", () => {
      expect(gear.itemSlots).toEqual(itemSlots);
    });
  });

  describe("items", () => {
    test("contains 2 days of rations", () => {
      const rations = gear.items.filter((g: IGear) => g.name === "rations");
      expect(rations).toHaveLength(2);
    });

    test("contains 2 pieces of dungeonnering gear", () => {
      const dungeoneeringGear = gear.items.filter((item: IGear) =>
        gearList.dungeoneeringGear.includes(item)
      );
      expect(dungeoneeringGear).toHaveLength(2);
    });

    test("has one piece of gear from General Gear Set 1", () => {
      const generalGear1 = gear.items.filter((item: IGear) =>
        gearList.generalGearSetOne.includes(item)
      );
      expect(generalGear1).toHaveLength(1);
    });

    test("has one piece of gear from General Gear 2", () => {
      const generalGear2 = gear.items.filter((item: IGear) =>
        gearList.generalGearSetTwo.includes(item)
      );
      expect(generalGear2).toHaveLength(1);
    });
  });

  describe("armor", () => {
    test("selects a random piece of armor", () => {
      expect(armorList.armor.includes(gear.armor)).toBe(true);
    });

    test("adds the armor to the characters gear", () => {
      const armor = gear.items.filter((item: IGear) => item.type === "armor");

      expect(armor).toHaveLength(1);
    });
  });
});
