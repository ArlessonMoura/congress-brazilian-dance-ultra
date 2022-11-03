import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';
import Translator from '../../assets/i18n/Translator';

function ModalLGPD(props) {
  const { privacyPolice, rulesModal } = props;
  return (
    <Modal
      show={privacyPolice}
      onHide={() => rulesModal(false)}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Política de Privacidade</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <article>
          <p>
            <Translator path="modalPrivacy.content1" />
            <br />
            <Translator path="modalPrivacy.point1" />
            <br />
            <Translator path="modalPrivacy.point2" />
            <br />
          </p>
          <p>
            <Translator path="modalPrivacy.content2" />
          </p>
        </article>
      </Modal.Body>
    </Modal>
  );
}

ModalLGPD.propTypes = {
  privacyPolice: PropTypes.bool.isRequired,
  rulesModal: PropTypes.func.isRequired,
};

export default ModalLGPD;
