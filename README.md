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

Typical usage of `r-button` may look like:
```
{{r-button
    clickHandler=(action "reset")
    variant="secondary"
    size="big"
    disabled=isFormUnchanged
    label="Reset"
}}

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


Typical usage of `r-async-button` may look like:

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
`r-link-button`s are extended from `r-button` and have 2 extra arguments:

- `href` - The link to open. E.g.
```
href= "https://blog.repositive.io"
```
- `target` - Where the linked document will open. E.g.
```
target='_blank'
```

Typical usage of `r-link-button` may look like:

```
{{r-link-button
    clickHandler=(action "trackExit")
    href= model.url
    label= "Access Data"
    variant="primary"
    size="big"
    target="_blank"
}}
```

### Pagination
`r-pagination` takes the following parameters:

- `totalPages` - The total number of response results / resultsPerPage. E.g.
```
totalPages=totalPages
```

- `currentPageNumber` - Number signifying which page the user is on. E.g.
```
currentPageNumber=currentPage
```

- `nextPage` - Action to be called when the 'Next' button is pressed. E.g.
```
nextPage=(action 'nextPage')
```

- `previousPage` - Action to be called when the 'Previous' button is pressed. E.g.
```
previousPage=(action 'previousPage')
```

- `goToPage` - Action to be called when a page number is pressed. E.g.
```
goToPage=(action 'goToPage')
```


Typical usage of `r-pagination` may look like:

```
{{r-pagination
    totalPages=totalPages
    currentPageNumber=page
    nextPage=(action 'nextPage')
    previousPage=(action 'previousPage')
    goToPage=(action 'goToPage')
}}
```

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
