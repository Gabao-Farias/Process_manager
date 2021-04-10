import styled from 'styled-components';

export const Wrapper = styled.div<ThemeChoice>`
  background-color: ${({ theme }) => theme.environment.darker};
  min-height: 100vh;
  transition: 0.4s;
`;

export const HeaderContainer = styled.div<ThemeChoice>`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: center;
  min-height: 15vh;
  padding: 10px;

  background-color: ${({ theme }) => theme.environment.light};
  color: ${({ theme }) => theme.text.main};

  transition: 0.4s;
`;

export const HeaderSmallForm = styled.div<ThemeChoice>`
  flex: 1;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.environment.lighter};
  min-width: 300px;
  transition: 0.4s;
`;

export const HeaderInput = styled.input`
  flex: 1;
  display: flex;
  flex-direction: row;

  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
`;

export const Select = styled.select`
  flex: 1;
  display: flex;
  flex-direction: row;

  padding: 5px;
  margin: 10px;
  border-radius: 10px;

  background-color: #fff;

  text-align: center;
`;

export const Option = styled.option`
  display: flex;
  flex: 1;
  text-align: center;
`;

export const HeaderOption = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 5px;
  margin: 10px;

  border-radius: 10px;
`;
