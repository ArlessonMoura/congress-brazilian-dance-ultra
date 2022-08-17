import React, { Component  } from 'react';
import './style.scss';

class Header extends Component {

  render() {
    return(
      <header className="container-fluid">
        <nav>
          <a href="#section-one">Início</a>
          <a href="#section-two">Nossa História</a>
          <a href="#section-three">Forró do Ultra!</a>
          <a href="#section-four">Inscrições</a>
          <a href="login">Login</a>                          
        </nav>
      </header>
    );
  }
}

export default Header;
