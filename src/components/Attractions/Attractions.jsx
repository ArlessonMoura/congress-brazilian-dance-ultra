import React from 'react';
import { Carousel } from 'react-bootstrap';
import Translator from '../../assets/i18n/Translator';
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
          <h2 className="name">
            <Translator path="congress.tabAttractions.slide1Subs.text1" />
          </h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 className="name">
            <Translator path="congress.tabAttractions.slide2Subs.text1" />
          </h2>
          <h3>
            <Translator path="congress.tabAttractions.slide2Subs.text2" />
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="size-img d-block"
          src={attraction2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="name">
            <Translator path="congress.tabAttractions.slide3Subs.text1" />
          </h2>
          <h3>
            <Translator path="congress.tabAttractions.slide3Subs.text2" />
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
          <h2 className="name">
            <Translator path="congress.tabAttractions.slide4Subs.text1" />
          </h2>
          <h3>
            <Translator path="congress.tabAttractions.slide4Subs.text2" />
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Attractions;
