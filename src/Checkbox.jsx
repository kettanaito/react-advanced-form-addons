import React from 'react';
import styled from 'styled-components';
import { createField, fieldPresets } from 'react-advanced-form';
import Label from './Label';
import { colors, Icon } from './const';

const CheckboxLabel = styled(Label)`
position: relative;
padding-left: 1.45rem;

color: ${colors.black};
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
  left: 3px;
  top: 3px;
  stroke-width: 3px;
}

${({ checked }) => checked && `
  &::before {
    border-color: ${colors.grayDark};
  }
`}

${({ focused }) => focused && `
  &::before {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 175, 232, .20);
  }

  & .icon {
    stroke: ${colors.primary};
  }
`}
`;

const CheckboxContainer = styled.div`
margin-bottom: 1rem;
`;

const StyledInput = styled.input`
position: absolute;
opacity: 0;
`;

function Checkbox({ fieldProps, fieldState, label }) {
  const { id, name, checked, required } = fieldProps;
  const { focused } = fieldState;
  const fieldId = id || name;

  return (
    <CheckboxContainer>
      <StyledInput id={ fieldId } { ...fieldProps } />
      <CheckboxLabel
        htmlFor={ fieldId }
        checked={ checked }
        focused={ focused }
        required={ required }>
        { checked && (
          <Icon
            class="icon"
            animated
            name="check"
            height={ 12 }
            width={ 12 } />
        ) }
        { label }
      </CheckboxLabel>
    </CheckboxContainer>
  );
}

Checkbox.displayName = 'Checkbox';

export default createField(fieldPresets.checkbox)(Checkbox);
