import React from 'react';
import styled from 'styled-components';
import { createField, fieldPresets } from 'react-advanced-form';
import Label from './Label';
import { colors, Icon } from './const';

const CheckboxLabel = styled(Label)`
position: relative;
padding-left: 1.45rem;
cursor: pointer;

&::before {
  position: absolute;
  left: 0;
  content: '';
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
}

& .icon {
  position: absolute;
  left: 2px;
  top: 2px;
  stroke-width: 3px;
}
`

const StyledInput = styled.input`
opacity: 0;

&:checked + ${CheckboxLabel}::before {
  border-color: ${colors.grayDark};
}

&:focus + ${CheckboxLabel} {
  &::before {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 175, 232, .20);
  }

  & .icon {
    stroke: ${colors.primary};
  }
}
`

function Checkbox({ fieldProps, label }) {
  const { id, name, checked } = fieldProps;
  const fieldId = id || name;

  return (
    <div>
      <StyledInput id={ fieldId } { ...fieldProps } />
      <CheckboxLabel htmlFor={ fieldId }>
        { checked && (
          <Icon
            class="icon"
            animated
            name="check"
            height={ 14 }
            width={ 14 } />
        ) }
        { label }
      </CheckboxLabel>
    </div>
  );
}

Checkbox.displayName = 'Checkbox';

export default createField(fieldPresets.checkbox)(Checkbox);
