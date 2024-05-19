import path from "path";

import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import autoprefixer from "autoprefixer";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

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
      postcss({
        modules: false,
        minimize: true,
        extract: "styles.css",
        namedExports: (name) => `usy-${name}`,
        plugins: [autoprefixer()],
        extensions: [".scss"],
      }),
      alias({
        entries: [
          { find: "@src", replacement: path.resolve(__dirname, "src") },
        ],
      }),
      resolve(),
      commonjs({
        defaultIsModuleExports: false,
      }),
      url(),
      image(),
      svgr(),
      peerDepsExternal(),
      terser(),
      filesize(),
    ],
    external: ["react", "react-dom", "react-error-boundary"],
  },
  {
    input: "dist/cjs/types/index.d.ts", // collect all *.d.ts and export to root
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(sass|scss|css)$/],
  },
];
