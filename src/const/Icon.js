import React from 'react';
import feather from 'feather-icons';
import styled from 'styled-components';
import { dash } from './animations';

export const defaultOptions = {
  height: 16,
  width: 16
};

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ animated }) => animated && `
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 8s ease forwards;
  `}
`;

export default function Icon({ name, animated, ...options }) {
  const svg = feather.icons[name].toSvg(options);

  return (
    <IconContainer animated={ animated } dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
