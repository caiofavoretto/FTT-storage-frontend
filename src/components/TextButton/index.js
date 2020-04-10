import React from 'react';

import { Container, ButtonText } from './styles';

export default function TextButton({
  children,
  text,
  onClick,
  type = 'button',
}) {
  return (
    <Container type={type} onClick={onClick}>
      {children}
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
