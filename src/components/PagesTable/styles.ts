import styled from 'styled-components';
import { ColorsTheme } from '../../utils';

interface PropsPagesTable {
  used: boolean;
}

export const PagesTableContainer = styled.div<ThemeChoice>`
  padding: 10px;
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.dark};
  color: ${({choice}) => ColorsTheme[choice]?.text.main};

  border-radius: 10px;
  transition: 0.4s;
`;

export const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 0.8fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'tpso npf bp';

  border-radius: 10px;
`;

export const SimpleRow = styled.div<ThemeChoice>`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.light};
  padding: 4px 10px;
  border-radius: 10px;
  transition: 0.4s;
`;

export const Used = styled.div<PropsPagesTable & ThemeChoice>`
  display: flex;
  margin: 5px;
  background-color: ${({used, choice}) => (used ? ColorsTheme[choice]?.primary.light : ColorsTheme[choice]?.environment.light)};
  color: ${({used, choice}) => (used ? ColorsTheme[choice]?.text.dark : ColorsTheme[choice]?.text.main)};
  padding: 4px 10px;
  border-radius: 10px;
  transition: 0.4s;
`;

export const SmallHeader = styled.div<ThemeChoice>`
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.lighter};
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 16px;

  text-align: center;
  transition: 0.4s;
`;

export const HeaderItem = styled.div<ThemeChoice>`
  margin: 8px 0px;
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.light};
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  transition: 0.4s;
`;
