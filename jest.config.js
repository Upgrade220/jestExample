module.exports = {
    'roots': [
        '<rootDir>/src',
    ],
    'testMatch': [
        '/__tests__//*.test.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    'transform': {
        '^.+\\.tsx?$': 'ts-jest',
    },
};