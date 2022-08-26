import React, { Component  } from 'react';
import Button from 'react-bootstrap/Button';
import LoginModal from '../LoginModal/LoginModal';
import './style.scss';
class Header extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false,
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal(bool) {
    this.setState({ isModalOn: bool });    
  }

  render() {
    const { isModalOn } = this.state;
    return(
      <>
        <header className="container-fluid">  
          <nav>
            <Button variant="Link" href="#section-one">Início</Button>
            <Button variant="Link" href="#section-two">Nossa História</Button>
            <Button variant="Link" href="#section-three">Forró do Ultra!</Button>
            <Button variant="Link" href="#section-four">Inscrições</Button>
            <Button variant="Link" onClick={ () => this.showModal(true) }>
              <i className="bi bi-person-circle"></i>     
            </Button>
          </nav>
        </header>
       <LoginModal showModal={ this.showModal } isModalOn={ isModalOn }/>
      </>
    );
  }
}

export default Header;
