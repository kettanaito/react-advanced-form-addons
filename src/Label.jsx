import styled from 'styled-components';
import { colors, font } from './const';

const Label = styled.label`
display: ${({ inline }) => !inline && 'block'};
margin-bottom: .3rem;
color: ${colors.gray};
${font.default};
width: 100%;
transition: color .2s;

${({ invalid }) => invalid && `color: ${colors.danger};`}
`;

export default Label;
