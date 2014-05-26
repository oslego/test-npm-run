## Example of using `npm run`

Build automation using the `npm run` command, which runs tasks defined in the _scripts_ field in `package.json`. [Learn more](http://substack.net/task_automation_with_npm_run)

Advantages:

  - adequate for simple projects
  - minimal setup, dependencies come with `npm install`
  - use any shell script, not just NodeJS packages or plugins

### Setup
    npm install

Pulls down dependencies defined in the _devDependencies_ field in `package.json`.

### Run tests
    npm test

Runs test.js with [TAP](https://www.npmjs.org/package/tap). Shortcut for `tap test.js`

### Build CSS
    npm run build-css

Compiles `css/*.less` into CSS files, then concatenates `css/*.css` into `dist/styles.css`.

This example project uses [Less](http://lesscss.org/) for brevity (Less comes with `npm install`). Other pre-processors may be used.

### Development mode / watch
    npm run dev

Watches for changes to `css/*.less` files then runs `npm run build-css`
