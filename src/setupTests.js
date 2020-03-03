import '@testing-library/jest-dom/extend-expect';

module.exports = {
  testMatch: ['**/__tests__/**/*.test.ts'],
  collectCoverageFrom: [
    './src/App/Redux/Modules/**/*.ts',
  ],
};
