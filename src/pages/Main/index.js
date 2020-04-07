import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import TableList from '../../components/TableList';

import { Container, MainContainer } from './styles';

export default function Main() {
  const data = [
    {
      _id: 'dsadasd',
      type: 'camiseta',
      brand: 'lacoste',
      value: 550,
      sugested_value: 200,
      created_at: '10 DEZ 2019',
    },
  ];

  return (
    <Container>
      <Header />
      <MainContainer>
        <ul>
          <li className="selected">Meus Produtos</li>
          <li>Compras</li>
        </ul>

        <TableList data={data} />
      </MainContainer>
    </Container>
  );
}
