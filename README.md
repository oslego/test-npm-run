## Example of how to use `npm run`

### Setup
    npm install

First-time use only. Pulls down dependencies mentioned in `devDependencies` from `package.json`.

### Run tests
    npm test

Runs test.js with [TAP](https://www.npmjs.org/package/tap). Equivalent of `tap test.js`

### Build CSS
    npm run build-css

Concatenates `css/*.css` into one file at `dist/styles.css`.
