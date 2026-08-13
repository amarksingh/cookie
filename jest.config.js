module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.js'],
    transform: {},
    moduleNameMapper: {
        '^@ostro/support/(.*)$': '<rootDir>/../support/$1',
        '^@ostro/support$': '<rootDir>/../support',
        '^@ostro/contracts/(.*)$': '<rootDir>/../contracts/$1',
        '^@ostro/contracts$': '<rootDir>/../contracts',
        '^@ostro/console/(.*)$': '<rootDir>/../console/$1',
        '^@ostro/console$': '<rootDir>/../console/application.js',
        '^@ostro/cookie/(.*)$': '<rootDir>/$1',
        '^@ostro/cookie$': '<rootDir>/jar.js'
    },
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'clover']
};
