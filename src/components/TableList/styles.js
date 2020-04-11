import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  padding: 16px 0;
  margin-top: 64px;
  display: grid;
  grid-template-columns: ${(props) =>
      props.columns.map((column) =>
        column.size ? `${column.size}px ` : '1fr '
      )} ${(props) => (props.options ? '25px' : '')};

  span {
    font-size: 18px;
    font-weight: bold;
    color: #707178;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: ${(props) =>
      props.columns.map((column) =>
        column.size ? `${column.size}px ` : '1fr '
      )} ${(props) => (props.options ? '25px' : '')};
  align-items: center;
  font-size: 20px;
  text-transform: capitalize;
  color: ${(props) => props.color};
  border-radius: 8px;

  button {
    background: none;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;
