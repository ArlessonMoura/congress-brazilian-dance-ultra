import React, { Component } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';

class LoginModal extends Component {
  // paymentCardForm(){
  //   return ();
  // }

  signup() {
    return (
      <Form>
        <FormGroup />
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
        <Modal.Body />
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
