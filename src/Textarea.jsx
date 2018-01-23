import React from 'react';
import { connectField } from 'react-advanced-form';

function Textarea({ fieldProps }) {
  return (<textarea { ...fieldProps } />);
}

Textarea.displayName = 'Textarea';

export default connectField()(Textarea);
