[Refer]:

- https://docs.github.com/en/packages/quickstart
- https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

# 1. Generate auth token in the Github

- User -> Setting -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token
- At the New personal access token, select write:packages. After generating, copy the token

# 2. Update .npmrc

Update `global .npmrc`

```
  //npm.pkg.github.com/:_authToken=<token>
```

Update `local .npmrc`

```
  @NAMESPACE:registry=https://npm.pkg.github.com
```

Update `package.json`

```
  "name": "@NAMESPACE/<repo-name>",
  "publishConfig": {
    "NAMESPACE:registry": "https://npm.pkg.github.com"
  },
```

`Ex: NAMESPACE = anhthi-deep-dive`

# 3. Login to Github via CLI

```
  npm login --scope=@NAMESPACE --auth-type=legacy --registry=https://npm.pkg.github.com
  username: github username
  password: auth token
```

# 4. Generate build workflow

- Go to Github -> Action -> `Publish Node.js Package to GitHub Packages` to generate and commit the workflow
- Make sure the `files` and `types` prop is available on the `package.json`

```
  "files": [
    "dist"
  ],
  "types": "dist/index.d.ts",
```

# 5. Publish the package

```
  npm publish
  npm version patch|minor|major
```
