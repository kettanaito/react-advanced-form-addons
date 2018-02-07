import React from 'react';
import { Form } from 'react-advanced-form';
import { Input, Select, Radio } from '../src';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Input name="fieldOne" label="Field" required />
        <Input name="fieldTwo" label="Field" initialValue="Initial value" required />

        <Select name="select" label="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Form>
    );
  }
}
