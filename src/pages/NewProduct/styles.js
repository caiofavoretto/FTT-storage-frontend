import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  max-width: 1200px;
  margin: 0 auto;
`;

export const MainContainer = styled.section`
  width: 100%;
  margin-top: 128px;

  ul.menu {
    display: flex;
    align-items: center;

    li {
      font-weight: bold;
      font-size: 28px;
      color: #55a262;
      list-style: none;
    }
  }

  form {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  + div {
    margin-top: 32px;
  }
`;

export const InputColor = styled.div`
  margin-top: 32px;
  min-width: calc(30% - 64px);

  label {
    color: #707178;
    font-size: 18px;
    font-weight: bold;
  }

  .color-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Color = styled.div`
  height: 48px;
  width: 48px;
  margin-top: 16px;
  border-radius: 16px;
  border: none;
  background: ${(props) => props.color.toString()};

  cursor: pointer;

  + div {
    margin-left: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const TextButton = styled.button`
  margin: 32px 0;
  background: #55a262;
  border: none;
  padding: 16px;
  border-radius: 16px;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  align-self: flex-end;

  &:hover {
    opacity: 0.8;
  }
`;
