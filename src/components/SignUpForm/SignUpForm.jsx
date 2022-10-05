import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button,
  Row, Col,
} from 'react-bootstrap';
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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, cpf, birth, email, phone, password, password2, accepted,
    } = this.state;
    return (
      <Form>
        <Row>
          <FormGroup className="mb-3" controlId="formName">
            <FloatingLabel label="NOME COMPLETO">
              <Form.Control onChange={this.handleInputChange} name="name" value={name} required type="text" placeholder="nome completo" />
            </FloatingLabel>
          </FormGroup>
        </Row>

        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label="CPF">
                <Form.Control onChange={this.handleInputChange} name="cpf" value={cpf} required type="number" placeholder="CPF" pattern="" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3" controlId="formBirth">
              <FloatingLabel label="DATA DE NASCIMENTO">
                <Form.Control onChange={this.handleInputChange} name="birth" value={birth} required type="date" placeholder="Data de Nascimento" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <FormGroup className="mb-3" controlId="formEmail">
            <FloatingLabel label="E-MAIL">
              <Form.Control onChange={this.handleInputChange} name="email" value={email} required type="email" placeholder="e-mail" />
            </FloatingLabel>
          </FormGroup>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formPhone">
              <FloatingLabel label="TELEFONE">
                <Form.Control onChange={this.handleInputChange} name="phone" value={phone} required type="phone" placeholder="Telefone" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label="SENHA">
                <Form.Control onChange={this.handleInputChange} name="password" value={password} required type="password" placeholder="Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3" controlId="formConfirmPassword">
              <FloatingLabel label="CONFIRME SENHA">
                <Form.Control onChange={this.handleInputChange} name="password2" value={password2} required type="password" placeholder="Confirme Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Form.Check
            name="accepted"
            value={accepted}
            required
            label="Eu concordo com os termos e condições da Política de Privacidade"
          />
        </Row>

        <Row>
          <div className="d-flex justify-content-center col-12">
            <Button variant="outline-dark" type="submit">
              Gerar Boleto.
            </Button>
          </div>
        </Row>
      </Form>
    );
  }
}

export default SignUpForm;
