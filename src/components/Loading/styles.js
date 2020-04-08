import styled, { keyframes } from 'styled-components';

export const load = keyframes`
  0% {
    height: 16px;
  }

  15% {
    height: 32px;
  }

  30% {
    height: 16px;
  }

  100% {
    height: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 128px;

  div {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    animation: ${load} 1.3s ease-in-out infinite;

    border: 3px solid #55a262;

    + div {
      margin-left: 8px;
    }

    &.second {
      animation-delay: 0.4s;
    }

    &.third {
      animation-delay: 0.8s;
    }
  }
`;
