import React from 'react';
import styled from 'styled-components';
import { colors } from './const';

const Button = styled.button`
  padding: .5rem .75rem;

  border-radius: 2px;
  color: ${({ primary }) => primary ? '#fff' : colors.black};
  border: 1px solid rgba(0, 0, 0, .1);
  background-color: ${({ primary }) => primary ? colors.success : colors.grayLight};

  ${({ primary }) => primary && `
    font-weight: bold;
  `}
`;

export default Button;
