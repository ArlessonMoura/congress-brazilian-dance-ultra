import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button,
  Row, Col,
} from 'react-bootstrap';
import ModalLGPD from '../ModalLGPD/ModalLGPD';
import './style.scss';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cpf: '',
      birth: '',
      email: '',
      phone: '',
      password: '',
      password2: '',
      accepted: false,
      privacyPolice: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.rulesModal = this.rulesModal.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  rulesModal(bool) {
    this.setState({ privacyPolice: bool });
  }

  render() {
    const {
      name, cpf, birth, email, phone, password, password2, accepted, privacyPolice,
    } = this.state;

    return (
      <Form>
        <Button title="Politica de Privacidade" variant="Link" size="lg" onClick={() => this.rulesModal(true)}>
          <i className="bi bi-question-diamond-fill" />
        </Button>
        <Row>
          <FormGroup className="mb-3" controlId="formName">
            <FloatingLabel label="NOME COMPLETO">
              <Form.Control size="lg" onChange={this.handleInputChange} name="name" value={name} required type="text" placeholder="nome completo" />
            </FloatingLabel>
          </FormGroup>
        </Row>

        <Row>
          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label="CPF">
                <Form.Control size="lg" onChange={this.handleInputChange} name="cpf" value={cpf} required type="number" placeholder="CPF" pattern="" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formBirth">
              <FloatingLabel label="DATA DE NASCIMENTO">
                <Form.Control size="lg" onChange={this.handleInputChange} name="birth" value={birth} required type="date" placeholder="Data de Nascimento" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <FormGroup className="mb-3" controlId="formEmail">
            <FloatingLabel label="E-MAIL">
              <Form.Control size="lg" onChange={this.handleInputChange} name="email" value={email} required type="email" placeholder="e-mail" />
            </FloatingLabel>
          </FormGroup>
        </Row>

        <Row>
          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formPhone">
              <FloatingLabel label="TELEFONE">
                <Form.Control size="lg" onChange={this.handleInputChange} name="phone" value={phone} required type="phone" placeholder="Telefone" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label="SENHA">
                <Form.Control size="lg" onChange={this.handleInputChange} name="password" value={password} required type="password" placeholder="Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formConfirmPassword">
              <FloatingLabel label="CONFIRME SENHA">
                <Form.Control size="lg" onChange={this.handleInputChange} name="password2" value={password2} required type="password" placeholder="Confirme Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Form.Check
                name="accepted"
                value={accepted}
                required
                label="Eu concordo com os termos e condições da Política de Privacidade."
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <div className="d-flex justify-content-center col-12">
            <Button variant="outline-dark" type="submit">
              Gerar Boleto.
            </Button>
          </div>
        </Row>
        <ModalLGPD rulesModal={this.rulesModal} privacyPolice={privacyPolice} />
      </Form>
    );
  }
}

export default SignUpForm;
