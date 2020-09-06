import styled from 'styled-components';
import signInBgImg from '../../assets/signup-background.png';

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
    margin: 20px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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
    color: #f4ede8;
    display: block;
    text-decoration: none;
    transition: background-color 0.2s;

    display: block;
    align-items: center;

    &:hover {
      color: #c06d02;
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBgImg}) no-repeat center;
  background-size: cover;
`;
