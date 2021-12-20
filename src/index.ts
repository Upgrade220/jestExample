export function closestMultiple10(num: number): number {
    return num % 10 < 5 ? num - (num % 10) : num + 10 - (num % 10);
}

export function solution(str: string, ending: string): boolean {
    return str.endsWith(ending);
}

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

export function getSectionIdFromScroll(scrollY: number,sizes: ReadonlyArray<number>): number{
    let i = 0;
    return sizes.findIndex(size => (i += size) > scrollY);
}