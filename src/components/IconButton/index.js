import React from 'react';

import { Container } from './styles';

export default function IconButton({ Icon, onClick }) {
  return (
    <Container type="button" onClick={onClick}>
      <Icon size={22} color="#fff" />
    </Container>
  );
}
