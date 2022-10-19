import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button, Row, Col,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';

class SignInModal extends Component {
  constructor() {
    super();
    this.state = {
      cpf: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.checkId = this.checkId.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'cpf':
        this.setState({
          [name]: value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1'),
        });
        break;

      default:
        this.setState({
          [name]: value,
        });
        break;
    }
  }

  checkId() {

  }

  signIn() {
    const { cpf, password } = this.state;
    return (
      <Form onSubmit={this.checkId} action="/signin" method="post">
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label="CPF">
                <Form.Control onChange={this.handleInput} name="cpf" value={cpf} required type="text" placeholder="CPF" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label="SENHA">
                <Form.Control minLength="6" maxLength="10" onChange={this.handleInput} name="password" value={password} required type="password" placeholder="Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-center col-12">
            <Button variant="outline-dark" type="submit">
              Sign-in
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
          <Modal.Title>Cartão Inscrição</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.signIn()}
        </Modal.Body>

        <Modal.Footer>
          <p>
            Aqui você pode acessar segunda via de Boleto
            (que também é seu cartão de inscrição), e alterar dados cadastrais.
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
