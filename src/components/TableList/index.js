import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';

import { Container, TableHeader, TableBody, Row } from './styles';

import TableCell from '../TableCell';

export default function TableList({ data, fields, options = false }) {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  function getKey(obj, key) {
    const keys = key.split('.');

    let value = obj;
    keys.map((k) => {
      if (typeof value === 'object') {
        return (value = value[k]);
      }
    });
    return value;
  }

  return (
    <Container>
      <TableHeader columns={values.length} options={options}>
        {values.length > 0 &&
          values.map((value, index) => <span key={index}>{value.name}</span>)}
        {options && <span></span>}
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map((obj) => (
            <Row
              key={obj._id}
              columns={keys.length}
              options={options}
              color={obj.canceled_at ? '#FF6D6D' : '#fff'}
            >
              {keys.length > 0 &&
                keys.map((key, index) => (
                  <TableCell
                    key={obj._id + index}
                    value={getKey(obj, key)}
                    type={values[index].type}
                  />
                ))}

              {options && (
                <button>
                  <FaEllipsisH size={26} color="#707178" />
                </button>
              )}
            </Row>
          ))}
      </TableBody>
    </Container>
  );
}
