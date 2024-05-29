// jest.config.js

module.export = {
  preset: "ts-jest/presets/js-with-babel",
  testEnvironment: "node",
  verbose: true,
  globals: {
    NODE_ENV: "test",
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
