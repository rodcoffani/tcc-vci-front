import React from 'react';

import ead from '../../assets/images/ead-lab.png';
import './styles.css';

const Header = (props) => {
  return (
    <div className="header">
      <img src={ead} className="img-logo"/>
        {props.headerTitle}
    </div>
  );
}

export default Header;