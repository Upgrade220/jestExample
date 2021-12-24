export function getSectionIdFromScroll(scrollY: number,sizes: ReadonlyArray<number>): number{
    let i = 0;
    return sizes.findIndex(size => (i += size) > scrollY);
}