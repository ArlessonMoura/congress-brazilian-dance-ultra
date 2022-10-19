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
    this.teenageVerify = this.teenageVerify.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    switch (name) {
      case 'name':
        this.setState({
          [name]: value.toUpperCase(),
        });
        break;

      case 'cpf':
        this.setState({
          [name]: value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1'),
        });
        break;

      case 'email':
        this.setState({
          [name]: value.toLowerCase(),
        });
        break;

      case 'phone':
        this.setState({
          [name]: value.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})(\d+?)$/, '$1'),
        });
        break;

      default:
        this.setState({
          [name]: value,
        });
        break;
    }
  }

  teenageVerify() {
    const { birth } = this.state;
    const diff = new Date('2023-4-21').getTime() - new Date(birth).getTime();
    const diffDays = diff / (1000 * 60 * 60 * 24);
    const babyAge = diffDays / 365.22;
    console.log(babyAge);
    if (babyAge < 18) {
      alert('Menores, com idade mínima de 16 anos, devem estar acompanhados de responsáveis, ou portarem autorização escrita; Menores de 16 apenas serão admitidos acompanhados de responsáveis.');
      return false;
    }
    return true;
  }

  checkPassword(event) {
    const { password, password2 } = this.state;
    if (password !== password2) {
      event.preventDefault();
      event.stopPropagation();
      alert('Sua senha não confere; Os campos de "Senha" e "Confirme Senha" devem ser iguais.');
      return false;
    }
    return true;
  }

  rulesModal(bool) {
    this.setState({ privacyPolice: bool });
  }

  render() {
    const {
      name, cpf, birth, email, phone, password, password2, accepted, privacyPolice,
    } = this.state;

    return (
      <Form onSubmit={this.checkPassword} action="/signup" method="post">
        <Button title="Politica de Privacidade" variant="Link" size="sm" onClick={() => this.rulesModal(true)}>
          <i className="bi bi-info-circle-fill">LGPD</i>
        </Button>
        <Row>
          <FormGroup className="mb-3" controlId="formName">
            <FloatingLabel label="NOME COMPLETO">
              <Form.Control maxLength="50" size="lg" onChange={this.handleInputChange} name="name" value={name} required type="text" placeholder="nome completo" />
            </FloatingLabel>
          </FormGroup>
        </Row>

        <Row>
          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label="CPF">
                <Form.Control size="lg" onChange={this.handleInputChange} name="cpf" value={cpf} required type="text" placeholder="CPF" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formBirth">
              <FloatingLabel label="DATA DE NASCIMENTO">
                <Form.Control size="lg" onChange={this.handleInputChange} name="birth" value={birth} required type="date" placeholder="Data de Nascimento" onBlur={this.teenageVerify} />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <FormGroup className="mb-3" controlId="formEmail">
            <FloatingLabel label="E-MAIL | exemplo@exemplo.com.br">
              <Form.Control maxLength="50" size="lg" onChange={this.handleInputChange} name="email" value={email} required type="email" placeholder="e-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
            </FloatingLabel>
          </FormGroup>
        </Row>

        <Row>
          <Col xs={12} sm={12} lg>
            <FormGroup noValidate className="mb-3" controlId="formPhone">
              <FloatingLabel label="CELULAR">
                <Form.Control size="lg" onChange={this.handleInputChange} name="phone" value={phone} required type="phone" placeholder="Celular" pattern="(\([0-9]{2}\))\s9([0-9]{4})-([0-9]{4})" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label="SENHA">
                <Form.Control minLength="6" maxLength="10" size="lg" onChange={this.handleInputChange} name="password" value={password} required type="password" placeholder="Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col xs={12} sm={12} lg>
            <FormGroup className="mb-3" controlId="formConfirmPassword">
              <FloatingLabel label="CONFIRME SENHA">
                <Form.Control minLength="6" maxLength="10" size="lg" onChange={this.handleInputChange} name="password2" value={password2} required type="password" placeholder="Confirme Senha" />
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
