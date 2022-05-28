//================================================
// Factory Method
//
// A factory is a pattern which returns newly
// instanciated objects, this removes the complexity
// of object creation from the user.
//================================================

export interface burger {
  name: string;
  type: BurgerEnums;
}

export enum BurgerEnums {
  CHICKEN = "Chicken",
  BEEF = "Beef"
}

export class BurgerFactory {
  create(type: BurgerEnums): burger {
    if (type === BurgerEnums.CHICKEN) {
      return {
        name: "Supreme Burger with mayo",
        type: BurgerEnums.CHICKEN,
      };
    } else {
      return {
        name: "Supreme Meaty Burger with manliness",
        type: BurgerEnums.BEEF,
      };
    }
  }
}
