import {answer} from "../../src/yatzy";

describe('Yatzy kata', () => {
    describe('#answer', () => {
        it('should return 42', () => {
            expect(answer()).toBe(42);
        });
    });
});
