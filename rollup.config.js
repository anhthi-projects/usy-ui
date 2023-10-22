import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.cjs.outputFile,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.esm.outputFile,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
    ],
    external: [
      "react",
      "react-dom",
      "react-error-boundary",
      "styled-components",
    ],
  },
  {
    input: "dist/cjs/types/index.d.ts", // collect all *.d.ts and export to root
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
];
