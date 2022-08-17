import React, { Component  } from 'react';
import Header from '../../components/Header/Header';
import './style.scss';


class LandingPage extends Component { 

  render() {
    return (
      <>
        <Header/>
        <main>
          <section id="section-one">
            <p>Hello World!</p>
            <h1>Segmento 1</h1>
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
            <p>Hello World!</p>
            <h1>Segmento 4</h1>
          </section>
        </main>    
      </>
    );
  }

}

export default LandingPage;
