import {CalcTypes, calcType} from './index';

describe('Calculate Types', function () {
    const a = 10;
    const b = 5;

    it('addition', () => {
        const result = calcType(a, b, 15);

        expect(result).toBe(CalcTypes.Addition);
    })

    it('subtraction', function () {
        const result = calcType(a, b, 5);

        expect(result).toBe(CalcTypes.Subtraction);
    })

    it('multiplication', function () {
        const result = calcType(a, b, 50);

        expect(result).toBe(CalcTypes.Multiplication);
    })

    it('Division', function () {
        const result = calcType(a, b, 2);

        expect(result).toBe(CalcTypes.Division);
    })

    it('Unknown', function () {
        const result = calcType(a, b, 255);

        expect(result).toBe(CalcTypes.Unknown);
    })
});
