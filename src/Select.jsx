import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';
import Label from './Label';
import styled from 'styled-components';
import { colors, font } from './const';

const SelectWrapper = styled.span`
position: relative;

&:after {
  content: '';
  position: absolute;
  height: 0;
  width: 0;
  top: 4px;
  bottom: 0;
  right: .8em;
  margin: auto 0;
  border-color: ${colors.gray} transparent transparent transparent;
  border-style: solid;
  border-width: 5px;
  transition: transform 2s ease;
}
`;

const StyledSelect = styled.select`
-webkit-appearance: none;
-webkit-border-radius: 0px;

position: relative;
padding: .5rem .75rem;
padding-right: 48px;

background-color: #fff;
border: 1px solid #e1e2e6;
border-radius: 2px;
color: ${colors.black};
${font.default};
height: 35px;
width: 209px;

&:focus {
  outline: none;
  border-color: ${colors.primary};
  box-shadow: 0 0 3px rgba(0, 175, 232, .35);
}

&:disabled {
  color: ${colors.gray};
}
`;

function Select({ children, label, fieldProps }) {
  return (
    <div>
      { /* Label */ }
      { label && (
        <Label>{ label }</Label>
      ) }

      <SelectWrapper>
        <StyledSelect { ...fieldProps }>
          { children }
        </StyledSelect>
      </SelectWrapper>
    </div>
  );
}

Select.displayName = 'Select';

export default createField(fieldPresets.select)(Select);
