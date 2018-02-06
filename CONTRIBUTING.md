# Contributing

## Prerquisites

* [Yarn](https://yarnpkg.com/en/docs/install)

## Installation

* `git clone <repository-url>` this repository
* `cd ui-library`
* `yarn`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Test Coverage

* `npm test` Creates a folder `coverage` in the root of the project.
* `{BROWSER} coverage/lcov-report/index.html` To show the report in your browser.
* [Codecov](https://codecov.io/gh/repositive/ui-library/) is used to keep track of code coverage in this project.

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Publishing

* `git push && git push --tags` 

After pushing the CI will run the `npm publish` command.
