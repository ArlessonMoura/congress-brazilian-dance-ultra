import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
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
    };
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(lang) {
    this.setState({ language: lang });
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
                <SignUpForm />
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
