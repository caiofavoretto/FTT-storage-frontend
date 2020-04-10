import React from 'react';
import { FaShoppingCart, FaPlus, FaArrowLeft } from 'react-icons/fa';

import IconButton from '../IconButton';
import TextButton from '../TextButton';

import { Container } from './styles';

export default function Header({ history, back }) {
  function handleClickCart(e) {
    e.preventDefault();
  }

  function handleClickNovoProduto(e) {
    e.preventDefault();

    history.push('/novo_produto');
  }

  function handleClickBack(e) {
    e.preventDefault();

    history.push('/');
  }

  return (
    <Container>
      {back ? (
        <IconButton Icon={FaArrowLeft} onClick={handleClickBack} />
      ) : (
        <>
          <TextButton text="Novo Produto" onClick={handleClickNovoProduto}>
            <FaPlus size={22} color="#fff" />
          </TextButton>

          <IconButton Icon={FaShoppingCart} onClick={handleClickCart} />
        </>
      )}
    </Container>
  );
}
