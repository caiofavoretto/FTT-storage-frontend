import styled from 'styled-components';

export const Container = styled.button`
  background: #55a262;
  border: none;
  padding: 16px;
  border-radius: 16px;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonText = styled.strong`
  font-size: 18px;
  margin-left: 16px;
`;
