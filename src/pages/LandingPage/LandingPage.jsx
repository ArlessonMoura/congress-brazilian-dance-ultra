import React, { Component } from 'react';
import {
  Form, FormGroup, InputGroup, FloatingLabel, Button,
  Row, Col,
} from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Languages from '../../components/LangMenu/LangMenu';
import cornerTopL from '../../assets/images/left-top-big.png';
import cornerTopR from '../../assets/images/right-top-big.png';
import cornerBottomL from '../../assets/images/left-bottom-big.png';
import cornerBottomR from '../../assets/images/right-bottom-big.png';
import opening from '../../assets/images/opening-2023.png';
import './style.scss';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      language: 'pt-br',
      name: '',
      cpf: '',
      birth: '',
      email: '',
      phone: '',
      password: '',
      password2: '',
      accepted: false,
    };
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(lang) {
    this.setState({ language: lang });
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  signUp() {
    const {
      name, cpf, birth, email, phone, password, password2, accepted,
    } = this.state;
    return (
      <Form>
        <Row>
          <FormGroup className="mb-3" controlId="formName">
            <FloatingLabel label="NOME COMPLETO">
              <Form.Control name="name" value={name} required type="text" placeholder="nome completo" />
            </FloatingLabel>
          </FormGroup>
        </Row>

        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formCPF">
              <FloatingLabel label="CPF">
                <Form.Control name="cpf" value={cpf} required type="number" placeholder="CPF" pattern="" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3" controlId="formBirth">
              <FloatingLabel label="DATA DE NASCIMENTO">
                <Form.Control name="birth" value={birth} required type="date" placeholder="Data de Nascimento" />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <FormGroup className="mb-3" controlId="formEmail">
            <FloatingLabel label="E-MAIL">
              <Form.Control name="email" value={email} required type="email" placeholder="e-mail" />
            </FloatingLabel>
          </FormGroup>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formPhone">
              <FloatingLabel label="TELEFONE">
                <Form.Control name="phone" value={phone} required type="phone" placeholder="Telefone" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3" controlId="formPassword">
              <FloatingLabel label="SENHA">
                <Form.Control name="password" value={password} required type="password" placeholder="Senha" />
              </FloatingLabel>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup className="mb-3" controlId="formConfirmPassword">
              <FloatingLabel label="CONFIRME SENHA">
                <Form.Control name="password2" value={password2} required type="password" placeholder="Confirme Senha" />
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

  render() {
    return (
      <>
        <Header />
        <main>
          <Languages />
          <article>
            <section id="section-one" className="parallax">

              <div className="corners col-2">
                <img src={cornerTopL} alt="left-top-corner" />
              </div>

              <div className="opening col-8">
                <img src={opening} alt="opening-presents" />
                <div className="date">
                  <p>21, 22 e 23 de Abril.</p>
                  <p>Corre que está chegando!</p>
                </div>
              </div>

              <div className="corners col-2">
                <img src={cornerTopR} alt="right-top-corner" />
              </div>

            </section>

            <section id="section-two">
              <p>Hello World!</p>
              <h1>Segmento 2</h1>
            </section>

            <section id="section-three">
              <p>Hello World!</p>
              <h1>Segmento 3</h1>
            </section>

            <section id="section-four">
              <img className="col-2" src={cornerBottomL} alt="left-bottom-corner" />
              <div className="form col-8">
                {this.signUp()}
              </div>
              <img className="col-2" src={cornerBottomR} alt="right-bottom-corner" />
            </section>
          </article>
        </main>
      </>
    );
  }
}

export default LandingPage;
