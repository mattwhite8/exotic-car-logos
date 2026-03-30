import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";

export default [
  // Main CJS bundle
  {
    input: "src/index.ts",
    output: { file: "dist/index.js", format: "cjs", exports: "named" },
    external: ["react", "react-native"],
    plugins: [image(), typescript({ tsconfig: "./tsconfig.json" })],
  },
  // Main ESM bundle (tree-shakeable)
  {
    input: "src/index.ts",
    output: { file: "dist/index.esm.js", format: "esm" },
    external: ["react", "react-native"],
    plugins: [image(), typescript({ tsconfig: "./tsconfig.json" })],
  },
];
