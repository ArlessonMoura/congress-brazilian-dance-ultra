import React from 'react';
import { Carousel } from 'react-bootstrap';
import wtp from '../../assets/images/wtp.svg';
import attraction1 from '../../assets/images/attraction1.svg';
import attraction2 from '../../assets/images/attraction2.svg';
import attraction3 from '../../assets/images/attraction3.svg';
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
          <h2 className="name">Quais serão os professores e competidores desse ano?</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 className="name">Celio Rocha</h2>
          <h3>Aqui, é claro que é presença garantida!</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="name">Fábia & Erisson</h2>
          <h3>
            Também são presença mais que garantida!
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
          <h2 className="name">Erica & Witheney</h2>
          <h3>
            E esse casal fenomenal, será que virão para tentar o Bi-campeonato?
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Attractions;
