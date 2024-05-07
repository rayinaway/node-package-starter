# @rayinaway / node-package-starter

A highly opinionated starter project for developing Node.js packages. Features:

- [TypeScript](https://www.typescriptlang.org) as the development language
  - [TS Reset](https://www.totaltypescript.com/ts-reset) for better builtin typing
- [Biome](https://biomejs.dev) linter and formatter
- [Jest](https://jestjs.io) testing framework
- [Parcel](https://parceljs.org) builder
- [EditorConfig](https://editorconfig.org) for easier code editor configuration
- [commitlint](https://commitlint.js.org) for commit message consistency
- [husky](https://typicode.github.io/husky) for enforcing project quality on the Git level

Made by [Ray](https://rayinaway.github.io).

Licensed under the [MIT License](./license.md).

Update details can be found in the [changelog](./changelog.md). The repository is hosted [on GitHub](https://github.com/rayinaway/node-package-starter).

## Usage

1. Copy the project files (except the _`.git`_ directory) to your future project's directory.

2. Replace `__PLACEHOLDER__` values in _`package.json`_ and _`package-lock.json`_ with your own meaningful ones. The `source` field should point to one or more entry files for Parcel to start building the package at, as described [here](https://parceljs.org/features/targets/#entries).

3. If the built package is intended to be consumed by another package, additional target configuration in _`package.json`_ may be needed. The details on how Parcel uses target fields can be found [here](https://parceljs.org/features/targets/#library-targets).

4. Optionally, run the following command to update package dependencies:

   ```shell
   npx npm-check-updates --upgrade && npm install
   ```

   **Beware of major version bumps!** It is strongly recommended to review those updates to ensure that breaking changes will not actually break anything in the project.

5. Don't forget to either replace or remove _`readme.md`_, _`license.md`_, and _`changelog.md`_ to prevent anyone from confusing your project with this starter.

_Since there's no hidden configuration or high-level encapsulating tools, you're free (and encouraged!) to tailor the project further however you see fit._

## Project structure

- Package source files belong in the _`src`_ directory, the exact structure of which is up to you.
  - For convenience, Parcel includes the _`~`_ path alias that points to the directory where _`package.json`_ is located. For example, to import _`src/module.ts`_ from anywhere in the project you can use the _`~/src/module.ts`_ path. Similarly, _`~~`_ points to _`~/src`_.
  - Test files should have the _`.test.js`_ extension to get detected by Jest.
- Configuration files belong in the project root. Each tool's configuration should be put in a dedicated file, if possible.
- The _`scripts`_ directory contains Node.js scripts to run, manually or automatically.
- The _`.husky`_ directory contains shell scripts for husky to run whenever a Git hook gets called.
- Git-ignored _`.parcel-cache`_, _`build`_, _`node_modules`_, and _`test-coverage`_ are for the Parcel cache, package build artifacts, package dependencies, and test coverage reports, respectively.

## Package scripts

- `build` typechecks using `typecheck` and, if successful, builds the package.
- `lint` lints TypeScript and JavaScript files.
- `postinstall`, `postpublish`, and `prepublishOnly` are utility scripts for husky to install correctly. Not to be altered.
- `test` runs tests and generates the test coverage report.
- `test-watch` runs tests continuously to test changes being made to files.
- `typecheck` performs type checking for TypeScript files in _`src`_.
