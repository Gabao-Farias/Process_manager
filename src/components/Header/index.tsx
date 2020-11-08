import React from 'react';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';

const Header = () => {
  return(
    <HeaderContainer>
      <HeaderSmallForm>
        <HeaderInput type="number" placeholder="Insira o tamanho do processo em bytes" />
        <HeaderOption onClick={() => {}}>Adicionar Processo</HeaderOption>
      </HeaderSmallForm>
      <HeaderSmallForm>
        <HeaderInput type="number" placeholder="Insira o PID do processo" />
        <HeaderOption onClick={() => {}}>Remover Processo</HeaderOption>
      </HeaderSmallForm>
    </HeaderContainer>
  );
}

export default Header;
