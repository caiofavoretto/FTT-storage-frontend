import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .image {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    + span {
      margin-left: 16px;
    }
  }
`;
