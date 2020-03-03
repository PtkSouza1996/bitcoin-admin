import '@testing-library/jest-dom/extend-expect';

module.exports = {
  testMatch: ['**/__tests__/**/*.test.ts'],
  coverageDirectory: './src/__tests__/coverage',
  collectCoverageFrom: [
    '**/*.ts',
  ],
};
