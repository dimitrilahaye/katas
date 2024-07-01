import IncomingOrder, {DrinksEnum} from "../models/IncomingOrder";

export default class DrinkMakerProtocolFactory {
    get(incomingOrder: IncomingOrder) {
        let protocol = '';
        switch (incomingOrder.drink) {
            case DrinksEnum.COFFEE:
                protocol += 'C:';
                break;
            case DrinksEnum.CHOCOLATE:
                protocol += 'H:';
                break;
            case DrinksEnum.TEA:
                protocol += 'T:';
                break;
        }
        if (incomingOrder.sugarsNumber === 0) {
            protocol += ':';
        } else if (incomingOrder.sugarsNumber > 0) {
            protocol += `${incomingOrder.sugarsNumber}:0`;
        }

        return protocol;
    }
}
