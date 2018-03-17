import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';

function Textarea({ fieldProps }) {
  return (<textarea { ...fieldProps } />);
}

Textarea.displayName = 'Textarea';

export default createField(fieldPresets.textarea)(Textarea);
