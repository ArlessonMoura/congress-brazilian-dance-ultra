import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
  }

  // paymentCardForm(){
  //   return ();
  // }

  logIn() {
    return (
      <Form>
        <FormGroup className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicId">
          <FloatingLabel>
            <Form.Control type="text" placeholder="Nome Completo" />
          </FloatingLabel>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicId">
          <FloatingLabel>
            <Form.Control type="number" placeholder="CPF" />
          </FloatingLabel>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FloatingLabel>
            <Form.Control type="password" placeholder="Senha" />
          </FloatingLabel>
        </FormGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
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
          <Modal.Title>Cartão Inscrição</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.logIn()}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => showModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => showModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  isModalOn: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default LoginModal;
