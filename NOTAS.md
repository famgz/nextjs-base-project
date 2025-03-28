# NextJS Base Project

After clone instructions:
- delete or empty this file
- delete .git folder and init your own
- run `npm update`


## NextJS

`npx create-next-app@latest .`


## Lint

`npm install -D prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss`
// added .prettierrc

`npm i -D eslint-plugin-simple-import-sort @eslint/eslintrc`
// changed eslint.config.mjs

// to have auto format, make sure you have this on VSCode settings.json
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
```
// to run it: `npx eslint src --fix`


## Shadcn

`npx shadcn@latest init`

`npx shadcn@latest add button`


## Dark mode

`npm install next-themes`