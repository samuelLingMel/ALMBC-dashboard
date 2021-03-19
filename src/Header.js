import React from 'react';
import logoText from './ALMBCLogoName.png'
import twitter from './twitter.png'
import facebook from './facebook.png'
import instagram from './instagram.png'

import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  };

  render() {
    return(
      <div xclass="container">

      <header className='sticky-header'>
        { <a href='https://almbc.org.au/'><img className='logo' src={logoText} alt=""/></a> }
        <div className='header-grid'>
          <a href='https://twitter.com/ALMBC__' target="_blank" rel="noopener noreferrer"><img className='social-media' src={twitter} alt=""/></a>
          <a href='https://www.facebook.com/AusLiveMusicBusinessCouncil/' target="_blank" rel="noopener noreferrer"><img className='social-media' src={facebook} alt=""/></a>
          <a href='https://www.instagram.com/accounts/login/?next=/almbc__/' target="_blank" rel="noopener noreferrer"><img className='social-media' src={instagram} alt=""/></a>
          <a href='https://almbc.org.au/about' className='links'>About Us</a>
          <a href='https://almbc.org.au/member-resources-(incl.-covid)' className='links'>Member Resources</a>
          <a href='https://almbc.org.au/news' className='links'>News</a>
          <a href='https://almbc.org.au/membership' className='links'>Membership</a>
          <a href='https://almbc.org.au/newsletter' className='links'>Newsletter</a>
          <a href='https://almbc.org.au/login' className='links login'>Log In</a>
          <a href='https://almbc.org.au/register' className='button-looks'>Join the ALMBC</a>
        </div>
      </header>
      </div>
    );
  };
};


export default Header;