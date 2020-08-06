import React from 'react';

import logo from '../../assets/svgs/logo.svg';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="img-logo"/>
      <p>
        Exemplo de texto
      </p>
    </div>
  );
}

export default Header;