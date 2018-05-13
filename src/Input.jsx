import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';
import styled from 'styled-components';
import Label from './Label';
import Hint from './Hint';
import { Icon, spaces, colors, font, animations } from './const';

const InputContainer = styled.div`
margin: 1.5rem 0;
`;

const InputWrapper = styled.div`
position: relative;
display: inline-flex;
flex-wrap: wrap;

&:after {
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 100%;
  content: '';
  height: 0;
  display: block;
  background-color: ${colors.grayLight};
}

${({ validating }) => validating && `
  &:after {
    height: 2px;
    animation: ${animations.loadStripe} 8s ease forwards;
    background-color: ${colors.primary};
  }
`}
`;

const StyledInput = styled.input`
padding: ${spaces.inputPadding};
padding-right: 50px;

border: 1px solid ${colors.grayLighter};
border-radius: ${spaces.borderRadius};
color: ${colors.black};
${font.default};
transition-property: border box-shadow;
transition-duration: .2s;

&:focus {
  outline: none;
  border-color: ${({ fieldState: { invalid } }) => invalid ? colors.danger : colors.primary};
  box-shadow: 0 0 0 3px ${({ fieldState: { invalid } }) => invalid
    ? 'rgba(224, 77, 93, .2)'
    : 'rgba(0, 175, 232, .2)'};
}

&:disabled {
  color: ${colors.gray};
}

${({ fieldState: { valid } }) => valid && `
  border-color: ${colors.success};
`}

${({ fieldState: { invalid } }) => invalid && `
  border-color: ${colors.danger};
`}
`;

const ValidationStatus = styled.div`
display: ${({ valid, invalid }) => (valid || invalid) ? 'flex' : 'none'};
position: absolute;
right: 0;
top: 0;
bottom: 0;
align-items: center;
justify-content: center;
width: 40px;

&:before {
  position: absolute;
  content: '';
  height: 23px;
  width: 1px;
  background-color: ${({ valid, invalid }) => (
    (valid && 'rgba(0, 191, 97, .25)') ||
    (invalid && 'rgba(255, 0, 0, .25)')
  )};
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  transform-origin: center;
  animation: ${animations.slideDown} .2s ease;
}
`;

const Message = styled.p`
margin: .25rem 0 0;
color: ${colors.danger};
${font.default};
font-size: .8rem;
transition: color .2s;

animation: ${animations.slideDown} .2s;
`;

function Input(props) {
  const { innerRef, name, label, hint, disabled, fieldProps, fieldState } = props;
  const { required } = fieldProps;
  const { validating, validatedAsync, valid, invalid, errors } = fieldState;

  return (
    <InputContainer>
      { label && (
        <Label
          htmlFor={ name }
          valid={ valid }
          invalid={ invalid }
          required={ required }>
          { label }
        </Label>
      ) }

      <InputWrapper validating={ validating } validatedAsync={ validatedAsync }>
        <StyledInput
          { ...fieldProps }
          innerRef={ innerRef }
          fieldState={ fieldState }
          disabled={ validating || disabled }
          autoComplete="off" />

        <ValidationStatus
          valid={ valid }
          invalid={ invalid }>
          { valid && (
            <Icon
              animated
              name="check"
              height={ 16 }
              width={ 16 }
              stroke={ colors.success } />
          ) }

          { invalid && (
            <Icon
              animated
              name="x"
              height={ 16 }
              width={ 16 }
              stroke={ colors.danger } />
          ) }
        </ValidationStatus>
      </InputWrapper>

      { hint && (
        <Hint>{ hint }</Hint>
      ) }

      { invalid && errors && errors.map((error, i) => (
        <Message key={ i }>{ error }</Message>
      )) }
    </InputContainer>
  );
}

export default createField(fieldPresets.input)(Input);
