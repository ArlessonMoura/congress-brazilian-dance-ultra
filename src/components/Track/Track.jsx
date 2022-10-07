import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import gloogleMapsIcon from '../../assets/images/maps.png';
import wazeIcon from '../../assets/images/waze.png';
import './style.scss';

function Track() {
  return (
    <Container fluid>
      <Row>
        <Col className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6585228510858!2d-35.01564768460291!3d-7.930687781171226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1058b2aecfdd%3A0x40b18be6a704b199!2sHotel%20Campestre%20de%20Aldeia!5e0!3m2!1spt-BR!2sbr!4v1665174238847!5m2!1spt-BR!2sbr" title="map" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </Col>
      </Row>
      <Row>
        <Col className="route-icons">
          <a
            href="https://goo.gl/maps/EsbWQEE6oRdCaoQb9"
            target="_blank"
            rel="external noreferrer"
          >
            <input className="contact-icons" type="image" src={gloogleMapsIcon} alt="whatsapp-icon" />
          </a>

          <a
            href="https://www.waze.com/en/live-map/directions/hotel-campestre-de-aldeia-rua-jose-severino-de-barros-465-camaragibe?place=w.212993721.2129871671.7479399"
            target="_blank"
            rel="external noreferrer"
          >
            <input className="contact-icons" type="image" src={wazeIcon} alt="whatsapp-icon" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Track;
