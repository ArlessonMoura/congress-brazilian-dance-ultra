import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button, Row, Col,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      cpf: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  signIn() {
    const { cpf, password } = this.state;
    return (
      <Form>
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label="CPF">
                <Form.Control onChange={this.handleInputChange} name="cpf" value={cpf} required type="number" placeholder="CPF" pattern="" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label="SENHA">
                <Form.Control onChange={this.handleInputChange} name="password" value={password} required type="password" placeholder="Senha" />
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

LoginModal.propTypes = {
  isModalOn: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default LoginModal;
