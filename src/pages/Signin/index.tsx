import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Log in to your account</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <a href="forgot">Forgot your password?</a>
      </form>

      <a href="#denise">
        <FiLogIn />
        Create a new account
      </a>
    </Content>

    <Background />
  </Container>
);

export default Signin;
