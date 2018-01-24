import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Form } from 'react-advanced-form';
import { Input, Button } from '../src';

const validationRules = {
  name: {
    numberOnly: ({ value }) => /^\d+$/g.test(value)
  }
};

const validationMessages = {
  general: {
    missing: 'Please provide the required field.',
    invalid: 'Invalid value.'
  },
  name: {
    username: {
      invalid: 'Please use the correct username.'
    }
  }
};

storiesOf('Input', module)
  .add('Default', () => (
    <Form rules={ validationRules } messages={ validationMessages }>
      <Input name="inputOne" label="Optional field" />
      <Input name="inputTwo" label="Required field" required />
      <Input name="inputThree" label="Initial value" initialValue="Expected value" required />
      <Input name="numberOnly" label="Numbers only" />
      <Input name="username" label="Async validation" asyncRule={({ value }) => {
        return new Promise(resolve => setTimeout(() => resolve({
          valid: (value === 'kettanaito')
        }), 3000));
      }} />

      <Button primary>Submit</Button>
    </Form>
  ));
