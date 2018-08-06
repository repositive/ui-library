# Repositive UI Library

A set of ember components to allow frontend applications to be composed quickly and consistently. Developed by [Repositive.io](https://repositive.io).

## Publishing a new version

* Make your changes and commit them
* Run `npm version <major | minor | patch>` to bump the version number in `package.json` and create a new Git tag. This will be published automatically by CI.
* Push `git push` and push tags `git push --tags`.

## Prerequisites

This library requires the Repositive CSS library,  [Liz-Skin](https://github.com/repositive/liz-skin). Please ensure you have this setup before continuing.

## Getting started

#### Install addon

```
$ ember install @repositive/ui-library
```
This will put the latest version of the library into your project's `package.json`.

#### Import SCSS

Add the line `@import 'ui-library';` to the end of your `app.scss` file. This SCSS extends the [Liz-Skin](https://github.com/repositive/liz-skin) CSS library with custom component styles.

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
  - Size: small
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
Build on Dockyards [async-buttons](https://github.com/DockYard/ember-async-button). Async-buttons are similar to regular `r-button`s but can take a few extra options:

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

### Avatar

`r-avatar` takes the following parameters:

- `size` - Specifies the size of the avatar. Options include:

  - `small`
  - `medium` (default)
  - `large`
  - `x-large`

  E.g.
  ```
  {{r-avatar size='large'}}
  ```

- `src` - Specifies the url of the avatar image.
  ```
  {{r-avatar src='https://cdn.catimages.com/massive-cat.jpg'}}
  ```

- `fallbackSrc` - Specifies an alternate URL to use if `src` fails (e.g. returns 404).
  ```
  {{r-avatar src="https://example.com/404" fallbackSrc='https://cdn.catimages.com/massive-cat.jpg'}}
  ```

Typical usage of the `r-avatar` may look like:

```
{{r-avatar
    src=user.profile.avatar
    size="large"
}}
```

### Tabs

Tabs consist of two sub-components:

- `r-tab-list` - A block component in which you nest any number of `r-tab-list-item`s. This does not take any parameters.
- `r-tab-list-item` - An individual tab component

`r-tab-list-item` takes the following parameters:

- `tabName` - Tab text or label to be displayed
  E.g.
  ```
  {{r-tab-item tabName="Settings"}}
  ```
- `target` - The target route of the tab
  E.g.
  ```
  {{r-tab-item target="settings"}}
  ```
- `query` - Query param of the target route
  E.g.
  ```
  {{r-tab-item query="user"}}
  ```
- `icon` - The font-awesome icon to be displayed on the tab
  E.g.
  ```
  {{r-tab-item icon="user"}}
  ```
- `iconPosition` - Whether to display the icon left of the `tabName` or right
  E.g.
  ```
  {{r-tab-item iconPosition="left"}}
  ```
- `stats` - A number to be displayed on the tab e.g. Followers (*381*)
  E.g.
  ```
  {{r-tab-item stats=user.followers.length}}
  ```

Typical usage of the tab component:

```
{{#r-tab-list}}
  {{r-tab-list-item
      tabName="Profile"
      target="users.profile"
  }}
  {{r-tab-list-item
      tabName="Account Settings"
      target="users.settings"
  }}
{{/r-tab-list}}
```

## Contributing

See [contributing](https://github.com/repositive/ui-library/blob/master/CONTRIBUTING.md)
