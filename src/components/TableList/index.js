import React from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';

import { Container, TableHeader, TableBody, Row } from './styles';

import TableCell from '../TableCell';
import LoadingComponent from '../Loading';

export default function TableList({ data, fields, options, loading }) {
  function getKey(obj, key) {
    const keyArray = key.split('.');
    let objValue = obj;
    keyArray.map((k) => {
      if (typeof objValue === 'object') {
        objValue = objValue[k];
      }
      return objValue;
    });
    return objValue;
  }

  return (
    <Container>
      {!loading ? (
        <>
          <TableHeader columns={fields} options={options}>
            {fields.length > 0 &&
              fields.map((field) => (
                <span key={`field-${field.name}`}>{field.name}</span>
              ))}
            {options && <span />}
          </TableHeader>
          <TableBody>
            {data.length > 0 &&
              data.map((obj) => (
                <Row
                  key={obj._id}
                  columns={fields}
                  options={options}
                  color={obj.canceled_at ? '#FF6D6D' : '#fff'}
                >
                  {fields.length > 0 &&
                    fields.map((field, index) => (
                      <TableCell
                        key={`cell-${index}`}
                        value={getKey(obj, field.data_property)}
                        type={field.type}
                      />
                    ))}

                  {options && (
                    <button type="button">
                      <FaEllipsisH size={26} color="#707178" />
                    </button>
                  )}
                </Row>
              ))}
          </TableBody>
        </>
      ) : (
        <LoadingComponent />
      )}
    </Container>
  );
}

TableList.defaultProps = {
  options: false,
};

TableList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      data_property: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number,
      type: PropTypes.number.isRequired,
    })
  ).isRequired,
  options: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};
