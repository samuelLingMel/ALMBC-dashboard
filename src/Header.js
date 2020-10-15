import React from 'react';
import logoText from './ALMBCLogoName.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  };

  render() {
    return(
      <header>
        <img src={logoText} alt=""/>
      </header>
    );
  };
};


export default Header;