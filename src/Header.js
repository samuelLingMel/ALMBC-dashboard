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
      <header className='sticky-header'>
        <img className='logo' src={logoText} alt=""/>
        <a href='https://almbc.org.au/membership' className='join-button'>Join the ALMBC</a>
        
      </header>
    );
  };
};


export default Header;