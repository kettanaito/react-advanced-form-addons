import React from 'react';
import { createField } from 'react-advanced-form';

function Input({ fieldProps }) {
  return (<input { ...fieldProps } />);
}

Input.displayName = 'Input';

export default createField()(Input);
