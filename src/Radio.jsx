import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';
import styled from 'styled-components';
import Label from './Label';
import { colors } from './const';

const RadioLabel = styled(Label)`
position: relative;
display: inline;
margin-right: 1rem;
cursor: pointer;
vertical-align: middle;
color: ${({ checked }) => checked ? colors.grayDarker : colors.gray};
`;

const Checkmark = styled.span`
position: relative;
height: 12px;
width: 12px;
background-color: #fff;
border: 1px solid ${colors.grayLighter};
border-radius: 50%;
display: inline-block;
margin: 0 .25rem -2px 0;

&:before {
  content: '';
  position: absolute;
  height: 8px;
  width: 8px;
  background-color: ${colors.primary};
  border-radius: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: scale(0);
  transition: transform .25s ease;
}

${({ checked }) => checked && `
  &:before {
    transform: scale(1);
  }
`}
`;

function Radio({ label, fieldProps }) {
  const { checked, value } = fieldProps;

  return (
    <RadioLabel htmlFor={ value } checked={ checked }>
      <Checkmark checked={ checked } />
      <input id={ value } style={{ display: 'none' }} { ...fieldProps } />
      { label }
    </RadioLabel>
  );
}

Radio.displayName = 'Radio';

export default createField(fieldPresets.radio)(Radio);
