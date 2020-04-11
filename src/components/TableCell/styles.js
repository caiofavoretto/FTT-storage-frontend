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

export const Color = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 16px;
  background: ${(props) => `#${props.color.toString()}`};
`;
