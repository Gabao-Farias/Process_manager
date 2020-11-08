import styled from 'styled-components';

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  height: 15vh;
  padding: 10px;

  background-color: #232323;
`;

export const HeaderSmallForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const HeaderInput = styled.input`
  flex: 1;
  display: flex;
  flex-direction: row;

  padding: 10px;
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

  padding: 10px;
  margin: 10px;

  border-radius: 10px;
`;
