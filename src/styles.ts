import styled from 'styled-components';
import { ColorsTheme } from './utils';

export const Wrapper = styled.div<ThemeChoice>`
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.darker};
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

  background-color: ${({choice}) => ColorsTheme[choice]?.environment.light};
  color: ${({choice}) => ColorsTheme[choice]?.text.main};

  transition: 0.4s;
`;

export const HeaderSmallForm = styled.div<ThemeChoice>`
  flex: 1;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  flex-direction: column;
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.lighter};
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
