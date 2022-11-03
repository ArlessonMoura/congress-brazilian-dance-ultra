import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Translator from '../../assets/i18n/Translator';
import SignInModal from '../SignInModal/SignInModal';
import './style.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false,
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal(bool) {
    this.setState({ isModalOn: bool });
  }

  render() {
    const { isModalOn } = this.state;
    return (
      <>
        <header className="d-flex justify-content-center">
          <nav className="col-8 menu-anchor">
            <Button variant="outline-dark" size="lg" href="#section-one">
              <Translator path="header.btnHome" />
            </Button>
            <Button variant="outline-dark" size="lg" href="#section-two">
              <Translator path="header.btnStory" />
            </Button>
            <Button variant="outline-dark" size="lg" href="#section-three">
              <Translator path="header.btnCongress" />
            </Button>
            <Button variant="outline-dark" size="lg" href="#section-four">
              <Translator path="header.btnRegistration" />
            </Button>
            <Button variant="outline-dark" size="lg" onClick={() => this.showModal(true)}>
              <i className="bi bi-person-circle" />
            </Button>
          </nav>
        </header>
        <SignInModal showModal={this.showModal} isModalOn={isModalOn} />
      </>
    );
  }
}

export default Header;
