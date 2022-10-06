import React, { Component } from 'react';
import {
  Button, Modal, Form, InputGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import whatsappIcon from '../../assets/images/whatsapp.png';
import facebookIcon from '../../assets/images/facebook.png';
import './style.scss';

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.instagram.com/ultract/',
    };
    this.copyURL = this.copyURL.bind(this);
  }

  copyURL() {
    const { url } = this.state;
    url.select();
    url.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Endereço do site copiado com sucesso!');
  }

  render() {
    const { isModalShareOn, showShareModal } = this.props;
    const { url } = this.state;

    return (
      <Modal
        show={isModalShareOn}
        onHide={() => showShareModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cartão Inscrição</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button
            variant="Link"
            target="_blank"
            size="lg"
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.instagram.com/ultract/"
          >
            <img src={facebookIcon} alt="Whatsapp" />
          </Button>

          <Button
            variant="Link"
            target="_blank"
            size="lg"
            href="https://api.whatsapp.com/send?text=https://www.instagram.com/ultract/"
          >
            <img src={whatsappIcon} alt="Whatsapp" />
          </Button>

          <InputGroup hasValidation>
            <Button onClick={() => this.copyURL()}>
              <InputGroup.Text id="inputGroupPrepend">Copiar</InputGroup.Text>
            </Button>
            <Form.Control
              type="text"
              value={url}
            />
          </InputGroup>

        </Modal.Body>

        <Modal.Footer>
          <p>Compartilhe o &#39;Forró do Ultra &trade;&#39;!!!</p>
        </Modal.Footer>
      </Modal>
    );
  }
}

ShareModal.propTypes = {
  isModalShareOn: PropTypes.bool.isRequired,
  showShareModal: PropTypes.func.isRequired,
};

export default ShareModal;
