import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import test4 from '../../assets/images/test4.jpeg';
import test5 from '../../assets/images/test5.jpeg';
import test6 from '../../assets/images/test6.jpeg';
import test7 from '../../assets/images/test7.jpeg';
import './style.scss';

function Attractions() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Image
          fluid
          src={test4}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          src={test5}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          src={test6}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          src={test7}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Attractions;
