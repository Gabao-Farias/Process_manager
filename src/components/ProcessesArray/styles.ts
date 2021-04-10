import styled from 'styled-components';

export const ProcessArrayContainer = styled.div<ThemeChoice>`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: ${({ theme }) => theme.environment.lighter} solid 1px;
  border-radius: 20px;
  padding: 10px 20px;
`;

export const Title = styled.h1<ThemeChoice>`
  color: ${({ theme }) => theme.text.main};
  background-color: ${({ theme }) => theme.environment.lighter};
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
  transition: 0.4s;
`;
