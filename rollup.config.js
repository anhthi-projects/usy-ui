import path from "path";

import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      alias({
        entries: [
          { find: "@src", replacement: path.resolve(__dirname, "src") },
        ],
      }),
      resolve(),
      commonjs(),
      url(),
      image(),
      svgr(),
      peerDepsExternal(),
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
