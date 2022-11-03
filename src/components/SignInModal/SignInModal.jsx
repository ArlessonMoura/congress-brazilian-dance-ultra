import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button, Row, Col,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';
import Translator from '../../assets/i18n/Translator';

class SignInModal extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    // this.checkId = this.checkId.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // checkId() {

  // }

  signIn() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.checkId} action="/signin" method="post">
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label={<Translator path="modalSignin.labelEmail" />}>
                <Form.Control maxLength="50" size="lg" onChange={this.handleInput} name="email" value={email} required type="email" placeholder="e-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label={<Translator path="modalSignin.labelPassword" />}>
                <Form.Control minLength="6" maxLength="10" onChange={this.handleInput} name="password" value={password} required type="password" placeholder="Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-center col-12">
            <Button variant="outline-dark" type="submit">
              <Translator path="modalSignin.btnSignin" />
            </Button>
          </div>
        </Row>
      </Form>
    );
  }

  render() {
    const { isModalOn, showModal } = this.props;
    return (
      <Modal
        show={isModalOn}
        onHide={() => showModal(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Translator path="modalSignin.titleSignin" />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.signIn()}
        </Modal.Body>

        <Modal.Footer>
          <p>
            <Translator path="modalSignin.footerSignin" />
          </p>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  isModalOn: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default SignInModal;
