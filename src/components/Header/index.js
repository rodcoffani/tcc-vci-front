import React from 'react';

import ead from '../../assets/images/ead-lab.png';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <img src={ead} className="img-logo"/>
      <p>
        Exemplo de texto
      </p>
    </div>
  );
}

export default Header;