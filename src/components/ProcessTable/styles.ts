import styled from 'styled-components';

export const ProcessTableContainer = styled.div`
  padding: 10px;
  background-color: #777777;
  color: #fff;

  width: 300px;
  border-radius: 10px;

`;

export const PIDContainer = styled.h2``;

export const TableWrapper = styled.div``;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'npl npf';

  border: 1px solid #ffffff;
  border-radius: 10px;

  margin: 5px;
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

export const NPL = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  background-color: #222;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 10px;
`;
