import typescript from "@rollup/plugin-typescript";

export default [
  // Main CJS bundle
  {
    input: "src/index.ts",
    output: { file: "dist/index.js", format: "cjs", exports: "named" },
    external: ["react", "react-native"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
  // Main ESM bundle (tree-shakeable)
  {
    input: "src/index.ts",
    output: { file: "dist/index.esm.js", format: "esm" },
    external: ["react", "react-native"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
