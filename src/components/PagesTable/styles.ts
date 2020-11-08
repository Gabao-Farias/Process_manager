import styled from 'styled-components';

interface PropsPagesTable {
  used: boolean;
}

export const PagesTableContainer = styled.div`
  padding: 10px;
  background-color: #777777;
  color: #fff;

  max-width: 300px;
  border-radius: 10px;
`;

export const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'tpso npf bp';

  border: 1px solid #ffffff;
  border-radius: 10px;

  margin: 5px;
`;

export const PageNumber = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: #222;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 10px;
`;

export const NPF = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: #222;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 10px;
`;

export const Used = styled.div<PropsPagesTable>`
  flex: 1;
  display: flex;
  max-width: 30px;
  margin: 5px;
  background-color: ${(p) => (p.used ? "#066f2f" : "#222")};
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 10px;
`;
