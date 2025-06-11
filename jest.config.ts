import type { Config } from "jest"

export default async (): Promise<Config> => {
  return {
    preset: "ts-jest",
    verbose: true,
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
  }
}
