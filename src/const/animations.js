import { keyframes } from 'styled-components';

export const slideDown = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const loadStripe = keyframes`
  0% { width: 0; }
  10% { width: 10%; }
  20% { width: 45%; }
  36% { width: 60%; }
  90% { width: 85%; }
  100% { width: 95%; }
`;

export const finishAndVanish = keyframes`
  50% { width: 100%; }
  100% { height: 0; }
`;
