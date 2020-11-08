import React from 'react';
import Exemplo from '../../utils/Exemplo';
import { HeaderContainer } from './styles';

const Header = () => {
  return(
    <HeaderContainer>
      <div className="options">
        <button className="options" onClick={() => {}}>1</button>
        <button className="options" onClick={() => {}}>2</button>
        <button className="options" onClick={() => {}}>3</button>
        <h1>{Exemplo(4)}</h1>
      </div>
    </HeaderContainer>
  );
}

export default Header;
