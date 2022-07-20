/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    // specify a custom tsconfig for tests
    // need typescript transform to change jsx into js like the next build requires
    // see this setting in tsconfig.jest.json ... "jsx": "react"
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "^.*\\.scss$": "identity-obj-proxy",
    "^components(.*)$": "<rootDir>/components$1",
    "^pages(.*)$": "<rootDir>/pages$1",
  },
  testPathIgnorePatterns: ["/.next/", "./node_modules/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "@testing-library/react"
  ],
};