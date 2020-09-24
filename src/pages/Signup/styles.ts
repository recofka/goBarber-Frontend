import styled, { keyframes } from 'styled-components';
import signInBgImg from '../../assets/signup-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBgImg}) no-repeat center;
  background-size: cover;
`;

const appearFromRight = keyframes`
  from{
    opacity:0;
    transform: transLateX(50px)
  }
  to{
    opacity:1;
    transform: transLateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

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
