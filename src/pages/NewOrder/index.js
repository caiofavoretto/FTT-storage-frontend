import React, { useState } from 'react';
import Header from '../../components/Header';

import api from '../../service/api';

import Input from '../../components/Input';

import {
  Container,
  MainContainer,
  InputGroup,
  TextButton,
} from './styles';

export default function NewOrder({ history}) {
  const [amount, setAmount] = useState('');
  const [id, setId] = useState('');
 

  async function handleCreate(e) {
    e.preventDefault();

    if (
      amount 
    ) {
      try {
        await api.post(`/orders/${id}`, {
          amount,
        });

        history.push('/');
      } catch (error) {
        alert('Erro ao cadastrar.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  return (
    <Container>
      <Header history={history} back />

      <MainContainer>
        <ul className="menu">
          <li>Nova Compra</li>
        </ul>
        <form onSubmit={handleCreate}>
          <InputGroup>
            <Input type ="Number" value={amount} onChange={setAmount} name="Quantidade" />
            <Input  value={id} onChange={setId} name="Id" />
          </InputGroup>
          <TextButton type="submit">Cadastrar</TextButton>
        </form>
      </MainContainer>
    </Container>
  );
}
