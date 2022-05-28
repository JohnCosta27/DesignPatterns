import { BurgerFactory, BurgerEnums } from 'creational/factory';

console.log("Design Patterns Practice - And TypeScript learning!");
console.log("1. Factory");

const factory = new BurgerFactory();
console.log(factory.create(BurgerEnums.CHICKEN));
