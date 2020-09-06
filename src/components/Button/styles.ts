import styled from 'styled-components';

export const Container = styled.button`
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
`;
