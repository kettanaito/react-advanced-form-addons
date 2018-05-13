import styled from 'styled-components';
import { spaces, colors } from './const';

const Button = styled.button`
  padding: ${spaces.inputPadding};

  border-radius: 2px;
  color: ${({ primary }) => primary ? '#fff' : colors.black};
  border: 1px solid rgba(0, 0, 0, .1);
  background-color: ${({ primary }) => primary ? colors.success : colors.grayLight};
  user-select: none;

  ${({ primary }) => primary && `
    font-weight: bold;
  `}

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(0, 175, 232, .2);
  }
`;

export default Button;
