import {answer} from "../../src/trading-card-game";

describe('Trading card game kata', () => {
    describe('#answer', () => {
        it('should return 42', () => {
            expect(answer()).toBe(42);
        });
    });
});
