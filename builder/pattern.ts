export enum VegetableEnum {
    LETTUCE= "LETTUCE",
    DOMATO= "DOMATO",
    ONION= "ONION"
}

type VegetableEnumKeys = keyof typeof VegetableEnum;

export enum SauceEnum {
    KETCHUP= "KETCHUP",
    MAYO= "MAYO",
    MAGIC_SAUCE_BIG_MAC= "MAGIC_SAUCE_BIG_MAC",
    MUSTARD= "MUSTARD",
    BBQ= "BBQ"
}

type SauceEnumKeys = keyof typeof SauceEnum;

export enum ExtraIngredientEnum {
    ONION_RINGS= "ONION_RINGS",
    BACON= "BACON",
    SMOKED_BEEF= "SMOKED_BEEF"
}

type ExtraIngredientEnumKeys = keyof typeof ExtraIngredientEnum;

interface IBurgerBuilder {
    addMeat(count: number): this;
    addCheese(count: number): this;
    addSauces(sauceList: SauceEnumKeys[]): this;
    addVegetables(vegeList: VegetableEnumKeys[]): this;
    addPickle(): this;
    addExtraIngredients(ingredientList: ExtraIngredientEnumKeys[]): this;
}

export class BigMacBuilder implements IBurgerBuilder {
    private bigMac: BigMac;

    constructor() {
        this.bigMac = new BigMac();
    }
    addMeat(count: number): this {
        this.bigMac.meat = count;
        return this;
    }
    addCheese(count: number): this {
        this.bigMac.cheese = count;
        return this;
    }
    addSauces(sauceList: SauceEnumKeys[]): this {
        this.bigMac.sauceList = sauceList;
        return this;
    }
    addVegetables(vegeList: VegetableEnumKeys[]): this {
        this.bigMac.vegeList = vegeList;
        return this;
    }
    addPickle(): this {
        this.bigMac.pickle = true;
        return this;
    }
    addExtraIngredients(ingredientList: ExtraIngredientEnumKeys[]): this {
        this.bigMac.ingredientList = ingredientList;
        return this;
    }
    prepareBurger(): BigMac {
        return this.bigMac;
    }

}

export class CheeseBurgerBuilder implements IBurgerBuilder {
    private cheeseBurger: CheeseBurger;

    constructor() {
        this.cheeseBurger = new CheeseBurger();
    }
    addMeat(count: number): this {
        this.cheeseBurger.meat = count;
        return this;
    }
    addCheese(count: number): this {
        this.cheeseBurger.cheese = count;
        return this;
    }
    addSauces(sauceList: SauceEnumKeys[]): this {
        this.cheeseBurger.sauceList = sauceList;
        return this;
    }
    addVegetables(vegeList: VegetableEnumKeys[]): this {
        this.cheeseBurger.vegeList = vegeList;
        return this;
    }
    addPickle(): this {
        this.cheeseBurger.pickle = true;
        return this;
    }
    addExtraIngredients(ingredientList: ExtraIngredientEnumKeys[]): this {
        this.cheeseBurger.ingredientList = ingredientList;
        return this;
    }
    prepareBurger(): CheeseBurger {
        return this.cheeseBurger;
    }

}

class BigMac {
    public meat!: number;
    public cheese = 0;
    public sauceList!: SauceEnumKeys[];
    public vegeList!: VegetableEnumKeys[];
    public pickle = false;
    public ingredientList!: ExtraIngredientEnumKeys[];

}

class CheeseBurger {
    public meat!: number;
    public cheese = 0;
    public sauceList!: SauceEnumKeys[];
    public vegeList!: VegetableEnumKeys[];
    public pickle = false;
    public ingredientList!: ExtraIngredientEnumKeys[];

}

export class OrderDirector {
    private orderId!: string;

    constructor(orderId: string){
        this.orderId = orderId;
        console.log(`${this.orderId} Order Created`);
    }
    public prepareOrderForBigMac(builder: BigMacBuilder): void {
        console.log(`For the order: ${this.orderId} Bigmac ===>`);
        console.log(`${JSON.stringify(builder.prepareBurger())}`);
    }

    public prepareOrderForCheeseBurger(builder: CheeseBurgerBuilder): void {
        console.log(`For the order: ${this.orderId} CheeseBurger ===>`);
        console.log(`${JSON.stringify(builder.prepareBurger())}`);
    }
}
