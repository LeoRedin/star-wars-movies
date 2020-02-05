import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  background: ${({ avatar }) => avatar};
  background-size: ${({ size }) => size};
  margin: 1rem;
`;

export const Name = styled.div`
  font-size: 12px;
`;
