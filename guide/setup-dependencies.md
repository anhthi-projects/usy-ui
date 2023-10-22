# Refer

`https://blog.logrocket.com/how-to-build-component-library-react-typescript`

# 1. Setup and install dependencies

```
  npm init -y
```

Install react and typescript

```
  npm i -D react react-dom react-error-boundary typescript @types/react
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

# 2. Setup Typescript and Rollup

Create the `tsconfig.json` and `rollup.config.js` with contents

# 3. Update package.json

```
  "build": "rollup -c --bundleConfigAsCjs"
```

# 4. Setup Storybook

```
  npx sb init
```

# 5. Setup Eslint

```
  npm i eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-import-resolver-typescript eslint-plugin-jsx-a11y -D
  npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-jest -D
```

Create the `.eslintrc.json` with contents and update package.json

# 6. Setup Prettier

```
  npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

# 7. Setup Lint-staged and Husky

```
  npm i lint-staged husky -D
  npx husky-init && npm install
```

# 8. Setup Jest and React Testing Library

```
  npm i --D jest @types/jest jest-environment-jsdom ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event whatwg-fetch
```

Create the `jest.config.js` with contents
