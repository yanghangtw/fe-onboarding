# vuejs-code-style-formatter

Base skeleton repository for Vue3 project with automated code style formatter using [pre-commit](https://pre-commit.com/) and Prettier.

# Getting Started

1. Clone repository
2. Open terminal and run `brew install pre-commit`
3. In root folder of repository, run `pre-commit install`. This sets up pre-commit hooks in the project on your local machine.

# Recommended IDE Setup

-   Recommended to use VSCode as your IDE for development
-   Install following extensions:
    -   TypeScript Vue Plugin (Volar)
    -   Vue Language Features (Volar)
    -   Prettier - Code formatter

You can consider creating a `settings.json` file in `.vscode` folder and use the below configuration for your development.

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

Note that a `settings.json` file created in the `.vscode` folder is applied only to this project. If you want these settings to be applied across all projects you open in VSCode, you can set them in your user `settings.json` file instead.

# Notes

### ESLint

Intentionally set `--max-warnings 0` to `lint` script to limit threshold of warnings to 0 to prevent unused variables in codebase. Should there be any warnings, you will see something like this on the terminal:

```bash
> vuejs-code-style-formatter@0.0.0 lint
> eslint . --max-warnings 0 --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore


/Users/eugeneoei/Developer/projects/miwa/vuejs-code-style-formatter/src/App.vue
  4:11  warning  'test' is assigned a value but never used  @typescript-eslint/no-unused-vars # ---> warnings to be fixed

✖ 1 problem (0 errors, 1 warning)

ESLint found too many warnings (maximum: 0).
Encountered warnings and errors while linting. Please fix warnings and errors before commiting again. # ---> this is a custom message set in pre-commit-formatter file
```

Fix all warnings and errors before you attempt to commit again.

### Prettier

During the pre-commit hook phase, if there are files that have been reformatted by Prettier due to code styles issues, you will see a warning like this:

```bash
> vuejs-code-style-formatter@0.0.0 format
> prettier --write -c .

Checking formatting...
[warn] src/App.vue
[warn] src/components/__tests__/HelloWorld.spec.ts
[warn] Code style issues found in 2 files. # ---> this !!!
```

The files that have been reformatted by Prettier will **NOT** be staged. You will have to stage these files and commit again. This is the intended behaviour. See response by author of `pre-commit` [here](https://stackoverflow.com/questions/64309766/prettier-using-pre-commit-com-does-not-re-stage-changes#answers). So do take note whenever you make a commit.

The `.prettierrc.json` file in the root repository contains all the formatting rules that will be used in the project while `.prettierignore` file are folders/files that will be ignored by Prettier and skipped all formatting rules.

<!-- https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/ -->
