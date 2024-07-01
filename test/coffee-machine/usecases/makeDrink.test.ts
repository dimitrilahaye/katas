import sinon from 'sinon';
import MakeDrink from "../../../src/coffee-machine/core/usecases/MakeDrink";
import IncomingOrder, {DrinksEnum} from "../../../src/coffee-machine/core/models/IncomingOrder";
import DrinkMakerProtocolFactory from "../../../src/coffee-machine/core/factories/DrinkMakerProtocolFactory";

describe('unit | usecases | makeDrink', function () {
    describe('when user orders drink', function () {
        const testCases = [
            {
                drink: DrinksEnum.COFFEE,
                sugarsNumber: 0,
                protocol: 'C::',
                message: '1 coffee with 0 sugars and no stick',
            },
            {
                drink: DrinksEnum.COFFEE,
                sugarsNumber: 1,
                protocol: 'C:1:0',
                message: '1 coffee with 1 sugars and a stick',
            },
            {
                drink: DrinksEnum.COFFEE,
                sugarsNumber: 2,
                protocol: 'C:2:0',
                message: '1 coffee with 2 sugars and a stick',
            },
            {
                drink: DrinksEnum.CHOCOLATE,
                sugarsNumber: 0,
                protocol: 'H::',
                message: '1 chocolate with 0 sugars and no stick',
            },
            {
                drink: DrinksEnum.CHOCOLATE,
                sugarsNumber: 1,
                protocol: 'H:1:0',
                message: '1 chocolate with 1 sugars and a stick',
            },
            {
                drink: DrinksEnum.CHOCOLATE,
                sugarsNumber: 2,
                protocol: 'H:2:0',
                message: '1 chocolate with 2 sugars and a stick',
            },
            {
                drink: DrinksEnum.TEA,
                sugarsNumber: 0,
                protocol: 'T::',
                message: '1 tea with 0 sugars and no stick',
            },
            {
                drink: DrinksEnum.TEA,
                sugarsNumber: 1,
                protocol: 'T:1:0',
                message: '1 tea with 1 sugars and a stick',
            },
            {
                drink: DrinksEnum.TEA,
                sugarsNumber: 2,
                protocol: 'T:2:0',
                message: '1 tea with 2 sugars and a stick',
            },
        ];
        testCases.forEach(({drink, sugarsNumber, protocol, message}) => {
            it(`should send right message to drink maker and return right message for ${drink} and ${sugarsNumber} of sugars`, async function () {
                // given
                const drinkMakerProtocolFactory = new DrinkMakerProtocolFactory();
                const incomingOrder = new IncomingOrder({
                    drink,
                    sugarsNumber,
                });
                const drinkMaker = {
                    make: sinon.stub(),
                }
                const makeDrink = new MakeDrink(drinkMaker, drinkMakerProtocolFactory);

                // when
                const coffeeMachineMessage = await makeDrink.execute(incomingOrder);

                // then
                expect(drinkMaker.make.calledWith(protocol)).toBe(true);
                expect(coffeeMachineMessage).toEqual(message);
            });
        });
    });
});
