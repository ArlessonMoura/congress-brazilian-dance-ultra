import React, { Component  } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.scss';

class LoginModal extends Component {
  
  // paymentCardForm(){
  //   return ();
  // }

  signup() {
    return (
      <Form>
        <FormGroup>
          
        </FormGroup>
      </Form>
          
    );
  }


  render() {
    return(
      <Modal
        show={ this.props.isModalOn } 
        onHide={ () => this.props.showModal(false) }
        backdrop="static"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title>Cartão Inscrição</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => this.props.showModal(false) }>
            Close
          </Button>
          <Button variant="primary" onClick={ () => this.props.showModal(false) }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginModal;
