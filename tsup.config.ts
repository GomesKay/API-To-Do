import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/server.ts"],
  format: ["cjs"],
  target: "es2022",
  dts: false,
  clean: true,
  skipNodeModulesBundle: true,
  outDir: "build",

  external: [
    "**/*.prisma",
    "src/generated/prisma/schema.prisma",
    "src/generated/prisma/index.d.ts",
  ],
})
