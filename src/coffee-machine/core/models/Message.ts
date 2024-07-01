import IncomingOrder, {DrinksEnum} from "./IncomingOrder";

export default class Message {
    private readonly message: string;
    constructor(incomingOrder: IncomingOrder) {
        let message = '';
        switch (incomingOrder.drink) {
            case DrinksEnum.COFFEE:
                message += '1 coffee ';
                break;
            case DrinksEnum.CHOCOLATE:
                message += '1 chocolate ';
                break;
            case DrinksEnum.TEA:
                message += '1 tea ';
                break;
        }
        // 1 tea with 2 sugars and a stick
        message += `with ${incomingOrder.sugarsNumber} sugars `;
        if (incomingOrder.sugarsNumber === 0) {
            message += 'and no stick'
        } else if (incomingOrder.sugarsNumber > 0) {
            message += 'and a stick';
        }
        this.message = message;
    }

    get value() {
        return this.message;
    }
}
