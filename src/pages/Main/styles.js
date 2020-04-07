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

  ul {
    display: flex;
    align-items: center;

    li {
      font-weight: bold;
      font-size: 28px;
      color: rgba(255, 255, 255, 0.2);
      list-style: none;

      cursor: pointer;

      + li {
        margin-left: 80px;
      }
    }

    li.selected {
      color: #55a262;
    }
  }
`;
