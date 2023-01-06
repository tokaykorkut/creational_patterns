import { BigMacBuilder, CheeseBurgerBuilder, ExtraIngredientEnum, OrderDirector, SauceEnum, VegetableEnum } from "./pattern";
import { v4 as uuid } from "uuid";

const bigMac1 = new BigMacBuilder()
.addMeat(2)
.addCheese(2)
.addPickle()
.addVegetables([VegetableEnum.LETTUCE,VegetableEnum.ONION])
.addSauces([SauceEnum.MAGIC_SAUCE_BIG_MAC])

const order1 = new OrderDirector(uuid());

const bigMac2 = new BigMacBuilder()
.addMeat(4)
.addCheese(4)
.addPickle()
.addVegetables([VegetableEnum.LETTUCE,VegetableEnum.ONION])
.addSauces([SauceEnum.MAGIC_SAUCE_BIG_MAC,SauceEnum.MAYO])

const order2 = new OrderDirector(uuid());

const cheeseBurger1 = new CheeseBurgerBuilder()
.addMeat(4)
.addCheese(4)
.addPickle()
.addVegetables([VegetableEnum.ONION])
.addSauces([SauceEnum.KETCHUP,SauceEnum.MAYO])

const order3 = new OrderDirector(uuid());

const cheeseBurger2 = new CheeseBurgerBuilder()
.addMeat(4)
.addCheese(4)
.addVegetables([VegetableEnum.ONION])
.addSauces([SauceEnum.KETCHUP])
.addExtraIngredients([ExtraIngredientEnum.BACON])

const order4 = new OrderDirector(uuid());

console.log();
console.log("************************************");
console.log();
order1.prepareOrderForBigMac(bigMac1);
console.log('------------------------------------');
order2.prepareOrderForBigMac(bigMac2);
console.log('------------------------------------');
order3.prepareOrderForCheeseBurger(cheeseBurger1);
console.log('------------------------------------');
order4.prepareOrderForCheeseBurger(cheeseBurger2);