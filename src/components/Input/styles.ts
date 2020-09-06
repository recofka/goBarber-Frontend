import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  border: 2px solid #233229;
  padding: 16px;
  width: 100%;
  background: #233229;
  color: #666360;

  & + div {
    margin-top: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;
