import React from 'react';

import { Container } from './styles';

function handleInputNumber(value, setValue) {
  setValue(value.replace(',', '.'));
}

export default function Input({
  id,
  name,
  type,
  mask,
  short = false,
  big = false,
  textarea = false,
  value,
  onChange,
}) {
  return (
    <Container short={short} big={big}>
      <label htmlFor={name}>{name}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id={id ? id : name}
        />
      ) : (
        <input
          value={value}
          onChange={
            type !== 'Number'
              ? (e) => onChange(e.target.value)
              : (e) => handleInputNumber(e.target.value, onChange)
          }
          id={id ? id : name}
          type={type ? type : 'text'}
        />
      )}
    </Container>
  );
}
