import React, { Component } from 'react';
import {
  Form, FormGroup, FloatingLabel, Button,
} from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Languages from '../../components/LangMenu/LangMenu';
import cornerTopL from '../../assets/images/left-top-big.png';
import cornerTopR from '../../assets/images/right-top-big.png';
import cornerBottomL from '../../assets/images/left-bottom-big.png';
import cornerBottomR from '../../assets/images/right-bottom-big.png';
import opening from '../../assets/images/opening_clean_enhance.png';
import './style.scss';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      language: 'pt-br',
    };
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(lang) {
    this.setState({ language: lang });
  }

  signUp() {
    return (
      <Form>
        <FormGroup className="mb-3" controlId="formBasicName">
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
          Gerar Boleto.
        </Button>
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
            <section id="section-one">
              <img className="col-2" src={cornerTopL} alt="left-top-corner" />

              <img className="cast col-8" src={opening} alt="opening-presents" />

              <img className="col-2" src={cornerTopR} alt="right-top-corner" />
            </section>

            <section className="parallax">
              {/* section criada apenas para conter o background em efeito parallax */}
            </section>

            <section id="section-two">
              <p>Hello World!</p>
              <h1>Segmento 2</h1>
            </section>

            <section id="section-three">
              <p>Hello World!</p>
              <h1>Segmento 3</h1>
            </section>

            <section className="parallax">
              {/* section criada apenas para conter o background em efeito parallax */}
            </section>

            <section id="section-four">
              <img className="col-2" src={cornerBottomL} alt="left-bottom-corner" />
              <div className="form col-8">
                { this.signUp() }
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
