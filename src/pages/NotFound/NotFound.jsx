import React from 'react';
import {
  Alert,
  Button, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Translator from '../../assets/i18n/Translator';

import './style.scss';

function NotFound() {
  return (
    <Container fluid className="container">
      <Alert variant="warning" className="col-8 d-flex justify-content-center">
        <Link to="/">
          <Button variant="outline-dark" size="lg">
            <Translator path="notFound.unknown" />
            <p>Error 404</p>
          </Button>
        </Link>
      </Alert>
      {/* className="col-8 d-flex justify-content-center align-items-center" */}
    </Container>

  );
}

export default NotFound;
