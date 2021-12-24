export function closestMultiple10(num: number): number {
    return num % 10 < 5 ? num - (num % 10) : num + 10 - (num % 10);
}