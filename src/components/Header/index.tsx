import React, { FC, useState } from 'react';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';

interface HeaderProps {
  defineTamp: () => {};
}

const Header : FC<HeaderProps> = ({defineTamp}) => {
  const [tamp, setTamp] = useState();

  return(
    <HeaderContainer>
      <HeaderSmallForm>
        <strong>1º</strong>
        <HeaderInput value={tamp} type="number" placeholder="Insira o tamanho da página em Bytes" />
        <HeaderOption onClick={() => {}}>Definir tamanho da página</HeaderOption>
      </HeaderSmallForm>
      <HeaderSmallForm>
        <strong>2º</strong>
        <HeaderInput type="number" placeholder="Insira o tamanho do processo em bytes" />
        <HeaderOption onClick={() => {}}>Adicionar Processo</HeaderOption>
      </HeaderSmallForm>
      <HeaderSmallForm>
        <strong>3º</strong>
        <HeaderInput type="number" placeholder="Insira o PID do processo" />
        <HeaderOption onClick={() => {}}>Remover Processo</HeaderOption>
      </HeaderSmallForm>
    </HeaderContainer>
  );
}

export default Header;
