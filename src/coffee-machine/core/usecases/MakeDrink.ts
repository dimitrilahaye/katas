import DrinkMaker from "../adapters/DrinkMaker";
import IncomingOrder from "../models/IncomingOrder";
import DrinkMakerProtocolFactory from "../factories/DrinkMakerProtocolFactory";
import Message from "../models/Message";

export default class MakeDrink {
    constructor(
        private readonly drinkMaker: DrinkMaker,
        private readonly drinkMakerProtocolFactory: DrinkMakerProtocolFactory,
    ) {
    }
    async execute(incomingOrder: IncomingOrder) {
        const protocol = this.drinkMakerProtocolFactory.get(incomingOrder);
        await this.drinkMaker.make(protocol);

        return new Message(incomingOrder).value;
    }
}
