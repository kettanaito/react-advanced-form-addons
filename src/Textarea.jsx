import React from 'react';
import { createField } from 'react-advanced-form';

function Textarea({ fieldProps }) {
  return (<textarea { ...fieldProps } />);
}

Textarea.displayName = 'Textarea';

export default createField()(Textarea);
