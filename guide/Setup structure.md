# Refer

`https://blog.logrocket.com/how-to-build-component-library-react-typescript`

# Setup and install dependencies

```
  npm init -y
```

Install react and typescript

```
  npm i -D react react-error-boundary typescript @types/react
```

Install Styled-components

```
  npm i -D styled-components @types/styled-components
```

Install Rollup

```
  npm i -D rollup rollup-plugin-dts rollup-plugin-peer-deps-external @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser @rollup/plugin-typescript
```

- `@rollup/plugin-commonjs`: Bundling to CommonJS format
- `@rollup/plugin-node-resolve`: Locates modules using the Node resolution algorithm, for using third party modules in node_modules
- `@rollup/plugin-terser`: Minifying the final bundle
- `@rollup/plugin-typescript`: Transpiling our TypeScript code to JavaScript
- `rollup-plugin-dts`: Generating type files (.d.ts), that provide TypeScript type information about the components
- `rollup-plugin-peer-deps-external`: Preventing bundling of peerDependencies

# Setup Typescript

Create the tsconfig.json with content

# Setup Rollup

Create the rollup.config.js with content

# Update package.json

```
  "build": "rollup -c --bundleConfigAsCjs"
```
