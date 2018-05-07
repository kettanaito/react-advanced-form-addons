# React Advanced Form Addons
A collection of tools dedicated for fast form prototyping using [React Advanced Form](https://github.com/kettanaito/react-advanced-form).

## Components
### Fields
* `Input`
* `Radio`
* `Checkbox`
* `Select`
* `Textarea`

### Other
* `Label`
* `Button`

## Getting started

### Install
#### NPM:
```bash
npm install react-advanced-form-addons --save
```

#### Yarn:
```bash
yarn install react-advanced-form-addons
```

> **Note:** You would need to have [`react-advanced-form`](https://github.com/kettanaito/react-advanced-form) installed as a peer dependency in order to use this package.

### Prototype!
```jsx
import React from 'react';
import { Form } from 'react-advanced-form';
import { Input, Select } from 'react-advanced-form-addons';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Input
          name="username"
          required />
        <Select
          name="role"
          required>
          <option value="admin">Administrator</option>
          <option value="editor">Editor</option>
        </Select>
      </Form>
    );
  }
}
```

## License
This project is issued under [MIT License](./LICENSE).
