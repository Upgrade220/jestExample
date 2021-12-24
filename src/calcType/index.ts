export enum CalcTypes {
    Unknown,
    Addition,
    Subtraction,
    Multiplication,
    Division,
}

export function calcType(a: number, b: number, res: number): CalcTypes {
    const map: Record<number, CalcTypes> = {
        [a + b]: CalcTypes.Addition,
        [a - b]: CalcTypes.Subtraction,
        [a * b]: CalcTypes.Multiplication,
        [a / b]: CalcTypes.Division,
    }

    return map[res] || CalcTypes.Unknown;
}