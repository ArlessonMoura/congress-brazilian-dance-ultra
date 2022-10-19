import React, { Component } from 'react';
import {
  Button, Modal, Form, InputGroup, Row, Col,
} from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
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
          <Modal.Title>Compartilhe o &#39;Forró do Ultra &trade;&#39;!!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col>
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.instagram.com/ultract/"
                rel="noreferrer"
              >
                <input type="image" className="share" src={facebookIcon} alt="Whatsapp" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?text=https://www.instagram.com/ultract/"
                rel="noreferrer"
              >
                <input type="image" className="share" src={whatsappIcon} alt="Whatsapp" />
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputGroup>
                <CopyToClipboard text={url} onCopy={() => alert('Endereço do site copiado com sucesso!')}>
                  <InputGroup.Text onClick={this.copyURL}>
                    <Button variant="light">
                      Copiar
                    </Button>
                  </InputGroup.Text>
                </CopyToClipboard>

                <Form.Control readOnly type="text" value={url} />
              </InputGroup>
            </Col>
          </Row>

        </Modal.Body>
      </Modal>
    );
  }
}

ShareModal.propTypes = {
  isModalShareOn: PropTypes.bool.isRequired,
  showShareModal: PropTypes.func.isRequired,
};

export default ShareModal;
