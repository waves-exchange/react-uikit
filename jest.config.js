const path = require('path');

module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfigs/tsconfig.test.json',
        },
    },
    moduleNameMapper: {
        'test-utils': '<rootDir>/jest/test-utils.tsx',
    },
    snapshotSerializers: ['jest-emotion'],
    setupFilesAfterEnv: ['<rootDir>/jest/setupFilesAfterEnv.ts'],
    rootDir: path.resolve(__dirname),
};
