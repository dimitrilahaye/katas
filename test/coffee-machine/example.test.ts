import {answer} from "../../src/coffee-machine";

describe('Coffee Machine kata', () => {
    describe('#answer', () => {
        it('should return 42', () => {
            expect(answer()).toBe(42);
        });
    });
});
