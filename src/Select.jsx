import React from 'react';
import styled from 'styled-components';
import { createField, fieldPresets } from 'react-advanced-form';
import Label from './Label';
import { spaces, colors, font } from './const';


const SelectContainer = styled.div`
margin: 1.5rem 0;
`;

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
padding: ${spaces.inputPadding};
padding-right: 48px;

background-color: #fff;
border: 1px solid ${colors.grayLighter};
border-radius: ${spaces.borderRadius};
color: ${colors.black};
${font.default};
width: 209px;
transition: box-shadow .2s;

&:focus {
  outline: none;
  border-color: ${colors.primary};
  box-shadow: 0 0 0 3px rgba(0, 175, 232, .25);
}

&:disabled {
  color: ${colors.gray};
}
`;

function Select({ children, label, fieldProps }) {
  return (
    <SelectContainer>
      { /* Label */ }
      { label && (
        <Label>{ label }</Label>
      ) }

      <SelectWrapper>
        <StyledSelect { ...fieldProps }>
          { children }
        </StyledSelect>
      </SelectWrapper>
    </SelectContainer>
  );
}

Select.displayName = 'Select';

export default createField(fieldPresets.select)(Select);
