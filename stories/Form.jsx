import React from 'react';
import { Form, Field } from 'react-advanced-form';
import { Input, Select, Radio, Checkbox, Textarea } from '../src';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Input
          name="fieldOne"
          label="Field one"
          hint="This field is required"
          required />
        <Textarea
          name="fieldTwo"
          label="Field two"
          initialValue="Initial value"
          required />

        <Checkbox
          name="newsletter"
          label="Subscribe to newsletter"
          checked />
        <Checkbox
          name="checkboxTwo"
          label="Checkbox two" />

        <Select name="select" label="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Radio
          name="newRadio"
          label="Book"
          value="book" />
        <Radio
          name="newRadio"
          label="Cheese"
          value="cheese"
          checked />

        <Field.Group name="foo">
          <Input
            name="firstName"
            label="First name"
            required={({ get }) => {
              return !!get(['foo', 'lastName', 'value']);
            }} />
          <Input
            name="lastName"
            label="Last name"
            required={({ get }) => {
              return !!get(['foo', 'firstName', 'value']);
            }} />
          </Field.Group>
      </Form>
    );
  }
}
