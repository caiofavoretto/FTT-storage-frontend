import styled from 'styled-components';

export const Container = styled.div`
  min-width: calc(
    ${(props) =>
      props.short ? '30% - 64px' : props.big ? '70% - 64px' : '50% - 32px'}
  );

  label {
    color: #707178;
    font-size: 18px;
    font-weight: bold;
  }

  input {
    margin-top: 16px;
    width: 100%;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    padding: 16px;
    border: none;
    font-size: 20px;
  }

  textarea {
    margin-top: 16px;
    width: 100%;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    padding: 16px;
    border: none;
    font-size: 20px;
    height: calc(100% - 36px);
    resize: none;
  }
`;
