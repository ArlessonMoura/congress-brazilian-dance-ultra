import React from 'react';
import { Carousel } from 'react-bootstrap';
import wtp from '../../assets/images/wtp.png';
import attraction1 from '../../assets/images/attraction1.png';
import attraction2 from '../../assets/images/attraction2.png';
import attraction3 from '../../assets/images/attraction3.png';
import './style.scss';

function Attractions() {
  return (
    <Carousel indicators="false" pause="hover" variant="dark">
      <Carousel.Item>
        <img
          className="size-img d-block"
          src={wtp}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Quais serão os professores e competidores desse ano?</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Celio Rocha</h2>
          <h3>Aqui é claro que é presença garantida!</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Fábia & Erisson</h2>
          <h3>
            Também presença mais que garntida!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction3}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h2>Erica & Witheney</h2>
          <h3>
            E esse casal fenomenal, será que virão para tentar o Bi-campeonato!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Attractions;
