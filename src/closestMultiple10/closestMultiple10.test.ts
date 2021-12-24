import {closestMultiple10} from './index';

describe('Find the closest number multiple of 10', function () {
    it('first case', function () {
        expect(closestMultiple10(22)).toBe(20)
    })

    it('second case', function () {
        expect(closestMultiple10(25)).toBe(30)
    })

    it('third case', function () {
        expect(closestMultiple10(37)).toBe(40)
    })
});