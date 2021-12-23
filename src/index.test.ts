import {CalcTypes, calcType} from './index';

describe('Calculate Types', function () {
    const a = 10;
    const b = 5;

    it('addition', () => {
        const result = calcType(a, b, 15);

        expect(result).toBe(CalcTypes.Addition);
    })
});