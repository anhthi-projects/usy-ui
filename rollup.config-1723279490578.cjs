'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var path = require('path');
var alias = require('@rollup/plugin-alias');
var commonjs = require('@rollup/plugin-commonjs');
var image = require('@rollup/plugin-image');
var resolve = require('@rollup/plugin-node-resolve');
var terser = require('@rollup/plugin-terser');
var typescript = require('@rollup/plugin-typescript');
var url = require('@rollup/plugin-url');
var svgr = require('@svgr/rollup');
var rollupPluginBundleStats = require('rollup-plugin-bundle-stats');
var dts = require('rollup-plugin-dts');
var filesize = require('rollup-plugin-filesize');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');

const packageJson = require("./package.json");

/** @type {import('rollup').RollupOptions} */
var rollup_config = [
  {
    input: "index.ts",
    output: {
      dir: packageJson.module,
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
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
      commonjs({
        defaultIsModuleExports: false,
      }),
      url(),
      image(),
      svgr(),
      peerDepsExternal(),
      terser({
        format: {
          preamble: `"use client"`,
        },
      }),
      filesize(),
      rollupPluginBundleStats.bundleStats(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/types/index.d.ts", // collect all *.d.ts and export to root
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(sass|scss|css)$/],
  },
];

exports.default = rollup_config;
