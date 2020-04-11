import React, { useState } from 'react';
import Header from '../../components/Header';

import api from '../../service/api';

import Input from '../../components/Input';

import {
  Container,
  MainContainer,
  InputGroup,
  InputColor,
  Color,
  TextButton,
} from './styles';

export default function NewProduct({ history }) {
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [value, setValue] = useState('');
  const [sugested_value, setSugested_value] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('fff');
  const [description, setDescription] = useState('');

  async function handleCreate(e) {
    e.preventDefault();

    if (
      type &&
      brand &&
      value &&
      sugested_value &&
      size &&
      color &&
      description
    ) {
      try {
        await api.post('/products', {
          type,
          brand,
          value,
          sugested_value,
          size,
          color,
          description,
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
          <li>Novo Produto</li>
        </ul>

        <form onSubmit={handleCreate}>
          <InputGroup>
            <Input value={type} onChange={setType} name="Tipo" />
            <Input value={brand} onChange={setBrand} name="Marca" />
          </InputGroup>
          <InputGroup>
            <Input
              value={value}
              onChange={setValue}
              name="Valor"
              type="Number"
            />
            <Input
              value={sugested_value}
              onChange={setSugested_value}
              id="Valor_Sugerido"
              name="Valor Sugerido"
              type="Number"
            />
          </InputGroup>
          <InputGroup>
            <div>
              <Input value={size} onChange={setSize} short name="Tamanho" />
              <InputColor>
                <span htmlFor="Cor">Cor</span>
                <div className="color-container">
                  <Color
                    className={color === 'fff' ? 'selected' : ''}
                    onClick={() => setColor('fff')}
                    color="#fff"
                  />
                  <Color
                    className={color === '000' ? 'selected' : ''}
                    onClick={() => setColor('000')}
                    color="#000"
                  />
                  <Color
                    className={color === 'FF0A3C' ? 'selected' : ''}
                    onClick={() => setColor('FF0A3C')}
                    color="#FF0A3C"
                  />
                  <Color
                    className={color === '050E63' ? 'selected' : ''}
                    onClick={() => setColor('050E63')}
                    color="#050E63"
                  />
                </div>
              </InputColor>
            </div>
            <Input
              value={description}
              onChange={setDescription}
              big
              name="Características"
              textarea
            />
          </InputGroup>
          <TextButton type="submit">Cadastrar</TextButton>
        </form>
      </MainContainer>
    </Container>
  );
}
