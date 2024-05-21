module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/index.ts",
    "!**/src/components/Icon/*",
    "!src/**/*.stories.{ts,tsx}",
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 80,
    },
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/jest/__mocks__/svg-mock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg)": "<rootDir>/.jest/__mocks__/image-mock.js",
    "src/(.*)": "<rootDir>/src/$1",
  },
};
