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

# 4. Publish the package

```
  npm publish
```

# 5. Update version

```
  npm version patch|minor|major
```
