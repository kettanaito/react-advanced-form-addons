import styled from 'styled-components';
import { colors, font } from './const';

const Label = styled.label`
display: ${({ inline }) => inline ? undefined : 'block'};
margin-bottom: .4rem;
color: ${colors.gray};
${font.default};
width: 100%;
transition: color .2s;

${({ invalid }) => invalid && `color: ${colors.danger};`}

${({ required }) => required && `
  &::after {
    content: "*";
  }
`}
`;

export default Label;
