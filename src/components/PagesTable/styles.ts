import styled from 'styled-components';

interface PropsPagesTable {
  used: boolean;
}

export const PagesTableContainer = styled.div`
  padding: 10px;
  background-color: #777777;
  color: #fff;

  border-radius: 10px;
`;

export const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 0.8fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'tpso npf bp';

  border-radius: 10px;

  /* margin: 5px; */
`;

export const PageNumber = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: #222;
  padding: 4px 10px;
  border-radius: 10px;
`;

export const NPF = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: #222;
  padding: 4px 10px;
  border-radius: 10px;
`;

export const Used = styled.div<PropsPagesTable>`  
  display: flex;
  margin: 5px;
  background-color: ${({used}) => (used ? "#15ff11" : "#222")};
  color: ${({used}) => (used ? "#000" : "#fff")};
  padding: 4px 10px;
  border-radius: 10px;
`;

export const SmallHeader = styled.div`
  background-color: #555555;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 16px;

  text-align: center;
`;

export const HeaderItem = styled.div`
  background-color: #555555;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
`;
