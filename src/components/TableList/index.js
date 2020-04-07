import React from 'react';
import { FaTshirt, FaEllipsisH } from 'react-icons/fa';

import { Container, TableHeader, TableBody, Row } from './styles';

export default function TableList({ data }) {
  return (
    <Container>
      <TableHeader>
        <span>Tipo</span>
        <span>Marca</span>
        <span>Valor</span>
        <span>Valor sugerido</span>
        <span>Registrado em</span>
        <span></span>
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map((obj) => (
            <Row key={obj._id}>
              <div>
                <div className="image">
                  <FaTshirt size={20} color="#55a262" />
                </div>
                <span>{obj.type}</span>
              </div>
              <span>{obj.brand}</span>
              <span>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(obj.value)}
              </span>
              <span>
                {' '}
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(obj.sugested_value)}
              </span>
              <span>{obj.created_at}</span>
              <button>
                <FaEllipsisH size={26} color="#707178" />
              </button>
            </Row>
          ))}
      </TableBody>
    </Container>
  );
}
