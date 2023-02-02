import React, { Component } from 'react';
import {
  Button, Modal, Form, InputGroup, Row, Col, Alert,
} from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import whatsappIcon from '../../assets/images/whatsapp.png';
import facebookIcon from '../../assets/images/facebook.png';
import './style.scss';
import Translator from '../../assets/i18n/Translator';

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.instagram.com/ultract/',
      copyMsg: false,
    };
    this.onHideTriggers = this.onHideTriggers.bind(this);
  }

  onHideTriggers() {
    const { showShareModal } = this.props;
    this.setState({ copyMsg: false });
    showShareModal(false);
  }

  render() {
    const { isModalShareOn } = this.props;
    const { url, copyMsg } = this.state;

    return (
      <Modal
        show={isModalShareOn}
        onHide={this.onHideTriggers}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Translator path="modalShare.title" />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col className="d-flex justify-content-center">
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.instagram.com/ultract/"
                rel="noreferrer"
              >
                <input type="image" className="share" src={facebookIcon} alt="Whatsapp" />
              </a>
            </Col>
            <Col className="d-flex justify-content-center">
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
              <Alert show={copyMsg} variant="primary">
                Endereço do site copiado com sucesso!
              </Alert>
              <InputGroup>
                <CopyToClipboard text={url} onCopy={() => this.setState({ copyMsg: true })}>
                  <InputGroup.Text>
                    <Button variant="light">
                      <Translator path="modalShare.btnCopy" />
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
