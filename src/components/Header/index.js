import React from 'react';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';

import { Container, TextButton, ButtonText, IconButton } from './styles';

export default function Header() {
  return (
    <Container>
      <TextButton>
        <FaPlus size={22} color="#fff" />
        <ButtonText>Novo produto</ButtonText>
      </TextButton>

      <IconButton>
        <FaShoppingCart size={22} color="#fff" />
      </IconButton>
    </Container>
  );
}
