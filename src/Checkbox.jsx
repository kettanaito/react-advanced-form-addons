import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';

function Checkbox({ fieldProps }) {
  return (<input { ...fieldProps } />);
}

Checkbox.displayName = 'Checkbox';

export default createField(fieldPresets.checkbox)(Checkbox);
