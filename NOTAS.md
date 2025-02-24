`npx create-next-app@latest nextjs-base-project`


## Lint

`npm install -D prettier eslint-config-prettier eslint-plugin-prettier`

`npm install -D prettier-plugin-tailwindcss`

// create ./.prettierrc with content
```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

`npm i -D eslint-plugin-simple-import-sort`
`npm i -D @eslint/eslintrc`
// add to eslint.config.mjs
```json
{
    "plugins": {
      "simple-import-sort": simpleImportSort,
    },
    "rules": {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
```
// to auto format, make sure you have this on settings.json
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
```
// to run it
`npx eslint src --fix`


## Shadcn

`npx shadcn@latest init`

`npx shadcn@latest add button`


## Dark mode

`npm install next-themes`


## Fetch

`npm i axios`


PENDING

## Query

`npm i @tanstack/react-query`
`npm i -D @tanstack/eslint-plugin-query`


## Auth

`npm install next-auth@beta`

`npx auth secret`