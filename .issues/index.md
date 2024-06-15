## Bundled package includes 'dist' directory

- Add `below` to the `package.json`

```
    "files": [
        "dist"
    ],
```

## useEffect only works in Client Components. Add the "use client" directive at the top of the file to use it

- Add `preamble` to `terser` plugin

```
    format: {
        preamble: `"use client"`,
    },
```
