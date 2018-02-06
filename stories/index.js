import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Form from './Form';

storiesOf('Input', module)
  .add('Default', () => <Form />);
