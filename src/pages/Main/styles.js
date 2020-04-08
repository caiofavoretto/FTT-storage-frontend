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

export const PageList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 32px 0;

  li {
    background: #fff;
    padding: 12px 8px;
    border-radius: 8px;
    font-size: 22px;
    list-style: none;

    cursor: pointer;

    + li {
      margin-left: 16px;
    }

    span {
      color: #707178;
    }

    &.selected {
      background: #55a262;

      span {
        color: #fff;
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
