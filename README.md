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

- `variant` - Specifies the style of the button. Options include:

  - `primary`
  - `secondary`
  - `cancel`

  E.g.
  ```
  {{r-button variant='primary'}}
  ```


- `size` - Specifies the size of the button. Options include:

  - `big`
  - `small`

  E.g.
  ```
  {{r-button size='big'}}
  ```

By default a button has:
  - Size: big
  - Variant: secondary

#### r-button
As well as the `variant` and `size` options detailed above, the `r-button` can also take the following options:

- `label` - The button text. E.g.
```
label = "Cancel"
```

- `clickHandler` - The name of the action the button will call on click. E.g.
```
clickHandler = (action 'cancel')
```

- `disabled` - Boolean value to specify whether the button is disabled. E.g.
```
disabled = (not validations.valid)
```



#### r-async-button
Async-buttons are similar to regular `r-button`s but can take a few extra options:

- `action` - The name of the action which will be called on click. E.g.
```
action = (action 'signup')
```

- `default` - Default text of the button. E.g.
```
default = "Signup"
```

- `pending` - Text displayed when the promise is running i.e. not yet fulfilled or rejected. E.g.
```
pending = "Signing up..."
```

- `disableWhen` - Boolean value which allows for the button be be disabled when in a state other than `pending`.
```
disableWhen = isInvalid
```

- `reset` - Boolean value which tells the button whether or not to reset to default state once the promise has been fulfilled or rejected. E.g.
```
reset = true
```


A typical `async-button` may look like:


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
