import React from 'react';
import { FaTshirt } from 'react-icons/fa';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Color } from './styles';

import { CustomTypes } from '../../utils/Enums';

export default function TableCell({ value, type }) {
  function renderCell() {
    switch (type) {
      case CustomTypes.StringImage: {
        return (
          <>
            <div className="image">
              <FaTshirt size={20} color="#55a262" />
            </div>
            <span>{value}</span>
          </>
        );
      }

      case CustomTypes.Currency: {
        return (
          <span>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(value)}
          </span>
        );
      }

      case CustomTypes.Color: {
        return <Color color={value} />;
      }

      case CustomTypes.Date: {
        return (
          <span>
            {format(new Date(value), 'd MMM yyyy', {
              locale: pt,
            }).toUpperCase()}
          </span>
        );
      }

      default: {
        return <span>{value}</span>;
      }
    }
  }

  return <Container>{renderCell()}</Container>;
}
