import {getSectionIdFromScroll} from './index';

interface ITestCase {
    scrollY: number;
    sizes: number[];
    result: number;
}

interface IProcessed {
    expected: number,
    result: number
}

test('Calculate Types', function () {
    const testCases: ITestCase[] = [
        {
            scrollY: 300,
            sizes: [300,200,400,600,100],
            result: 1,
        },
        {
            scrollY: 1600,
            sizes: [300,200,400,600,100],
            result: -1,
        },
    ]

    const processed: IProcessed[] = testCases.map(tc => ({
         expected: getSectionIdFromScroll(tc.scrollY, tc.sizes),
         result: tc.result,
    }));

    for (const tc of processed) {
        expect(tc.expected).toBe(tc.result);
    }
});