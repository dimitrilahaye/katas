export enum DrinksEnum {
    COFFEE = 'COFFEE',
    TEA = 'TEA',
    CHOCOLATE = 'CHOCOLATE',
}

export type IncomingOrderArgs = {
    drink: DrinksEnum,
    sugarsNumber?: number,
}

export default class IncomingOrder {
    public readonly drink: DrinksEnum;
    public readonly sugarsNumber: number;
    constructor({drink, sugarsNumber = 0}: IncomingOrderArgs) {
        this.drink = drink;
        this.sugarsNumber = sugarsNumber;
    }
}
