import React, { Component  } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import cornerTopL from '../../assets/images/left-top-big.png';
import cornerTopR from '../../assets/images/right-top-big.png';
import cornerBottomL from '../../assets/images/left-bottom-big.png';
import cornerBottomR from '../../assets/images/right-bottom-big.png';
import './style.scss';


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      language: "pt-br",
    }
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLaguage(lang) {
    this.setState({ language: lang });    
  } 

  render() {
    return (
      <>
        <Header/>
        <main>   
          <section id="section-one">
            <img className="col-2" src={ cornerTopL } alt="left-top-corner" />
            <p>Hello World!</p>
            <h1>Segmento 1</h1>
            <img className="col-2" src={ cornerTopR } alt="right-top-corner" />
          </section>
          <section id="section-two">
            <p>Hello World!</p>
            <h1>Segmento 2</h1>
          </section>

          <section className="parallax">
            {/* section criada apenas para conter o background em efeito parallax */}
          </section> 

          <section id="section-three">
            <p>Hello World!</p>
            <h1>Segmento 3</h1>
          </section>
          <section id="section-four">
            <img className="col-2" src={ cornerBottomL } alt="left-bottom-corner" />
            <p>Hello World!</p>
            <h1>Segmento 4</h1>
            <img className="col-2" src={ cornerBottomR } alt="right-bottom-corner" />
          </section>
        </main>
        <Footer/>  
      </>
    );
  }

}

export default LandingPage;
