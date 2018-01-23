import React from 'react';
import { connectField } from 'react-advanced-form';

function Input({ fieldProps }) {
  return (<input { ...fieldProps } />);
}

Input.displayName = 'Input';

export default connectField()(Input);
