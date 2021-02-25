import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
  /* height: 15vh; */
  padding: 10px;

  background-color: #161B22;
  color: #fff;
`;

export const HeaderSmallForm = styled.div`  
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const HeaderInput = styled.input`
  display: flex;
  flex-direction: row;

  padding: 5px;
  margin: 10px;
  border-radius: 10px;

  text-align: center;
`;

export const HeaderOption = styled.button`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;

  padding: 5px;
  margin: 10px;

  border-radius: 10px;
`;
