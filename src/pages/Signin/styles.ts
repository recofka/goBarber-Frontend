import styled from 'styled-components';
import signInBgImg from '../../assets/sign-in-bg.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #233229;
      border-radius: 10px;
      border: 2px solid #233229;
      padding: 16px;
      width: 100%;

      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 10px;
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      margin: 24px 0;
      transition: background-color 0.2s;

      color: #312e38;
      font-weight: 500;

      &:hover {
        background: #c06d02;
      }
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: #d3c6bd;
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: background-color 0.2s;

    display: block;
    align-items: center;

    &:hover {
      color: #c06d02;
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBgImg}) no-repeat center;
  background-size: cover;
`;
