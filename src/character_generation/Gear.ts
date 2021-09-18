import * as armorList from "character_generation/data/armor.json";
import * as gearList from "character_generation/data/gear.json";

class Gear {
  public itemSlots: number;
  public items: IGear[];
  public armor: IArmor;

  constructor(itemSlots: number) {
    this.itemSlots = itemSlots;
    this.armor = this.getRandomArmor();
    this.items = this.getRandomGear();
  }

  private getRandomArmor = (): IArmor => {
    return this.getRandomItem(armorList.armor as IArmor[]);
  };

  private getRandomGear(): IGear[] {
    const dg = gearList.dungeoneeringGear as IGear[];
    const gen1 = gearList.generalGearSetOne as IGear[];
    const gen2 = gearList.generalGearSetTwo as IGear[];

    const startingGear: IGear[] = [
      { name: "rations", count: 1, slots: 1, type: "food" },
      { name: "rations", count: 1, slots: 1, type: "food" },
    ];

    const dungeoneeringGear: IGear[] = new Array(2)
      .fill(undefined)
      .map((el) => this.getRandomItem(dg));

    const generalGear1 = this.getRandomItem(gen1);
    const generalGear2 = this.getRandomItem(gen2);

    // TODO: refactor so this isn't dependent on getRandomArmor being called first in the constructor
    return [
      ...startingGear,
      ...dungeoneeringGear,
      generalGear1,
      generalGear2,
      this.armor,
    ];
  }

  private getRandomItem = <T>(list: T[]): T => {
    const length = list.length;
    const randomIndex = Math.floor(Math.random() * length);
    return list[randomIndex];
  };
}

export default Gear;
