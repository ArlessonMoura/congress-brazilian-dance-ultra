import React from 'react';
import { Accordion, Image } from 'react-bootstrap';
import test1 from '../../assets/images/test1.jpeg';
import test2 from '../../assets/images/test2.jpeg';
import test3 from '../../assets/images/test3.jpeg';
import './style.scss';

function ScheduleCongress() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dia 21</Accordion.Header>
        <Accordion.Body>
          <Image fluid src={test1} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dia 22</Accordion.Header>
        <Accordion.Body>
          <Image fluid src={test2} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Dia 23</Accordion.Header>
        <Accordion.Body>
          <Image fluid src={test3} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ScheduleCongress;
