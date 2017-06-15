# UI Library

A set of ember components to allow frontend applications to be composed quickly and consistently.

## Prerequisites

Currently this library requires the Repositive CSS library [Liz-Skin](https://github.com/repositive/liz-skin).

Please ensure you have this setup before continuing.

## Installation

```
$ ember install @repositive/ui-library
```

This will put the latest version of the library into your project's `package.json`.


## Usage

You'll find a `README` file in each of the component directories in `/addon`. Please refer to the README of the component you'd like to use for usage instructions.

### Buttons

There are several button components:

- Regular button for synchronous actions: `r-button`.

- Button for asynchronous actions: `r-async-button`.

- Link button for linking to external resources: `r-link-button`.

All buttons are extended with the `r-button-mixin` and therefore share a base set of properties.

Base properties of each button component:

- **Variant** - Specifies the style of the button. Options include:

  - `primary`
  - `secondary`
  - `cancel`

  E.g.
  ```
  {{r-button variant='primary'}}
  ```


- **Size** - Specifies the size of the button. Options include:

  - `big`
  - `small`

  E.g.
  ```
  {{r-button size='big'}}
  ```

By default a button has:
  - Size: big
  - Variant: secondary



#### r-async-button

```
{{r-async-button
    action=(action 'save')
    default="Save Changes"
    disableWhen=(not validations.isValid)
    pending="Saving..."
    reset=true
    size="big"
    variant="primary"
}}
```
#### r-button
#### r-link-button

## Contributing

### Setup

* `git clone <repository-url>` this repository
* `cd ui-library`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
