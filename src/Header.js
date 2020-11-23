import React from 'react';
import logoText from './ALMBCLogoName.png'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  };

  render() {
    return(
      <header>
        <img className='logo' src={logoText} alt=""/>
      </header>
    );
  };
};


export default Header;