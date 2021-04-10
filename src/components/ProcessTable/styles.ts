import styled from 'styled-components';

export const ProcessTableContainer = styled.div<ThemeChoice>`
  padding: 10px;
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.environment.dark};
  color: ${({ theme }) => theme.text.main};

  max-width: 300;
  border-radius: 10px;
  transition: 0.4s;
`;

export const SmallHeader = styled.div<ThemeChoice>`
  background-color: ${({ theme }) => theme.environment.lighter};
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 16px;

  text-align: center;
  transition: 0.4s;
`;

export const SmallHeaderDetails = styled.div<ThemeChoice>`
  border-radius: 10px;
  margin: 8px 0px;
  background-color: ${({ theme }) => theme.environment.light};
  padding: 5px;
  text-align: center;
  transition: 0.4s;
`;

export const TableWrapper = styled.div``;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'npl npf';

  border-radius: 10px;

  margin: 5px;
`;

export const ItemRow = styled.div<ThemeChoice>`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: ${({ theme }) => theme.environment.light};
  padding: 4px 10px;
  border-radius: 10px;
  transition: 0.4s;
`;
