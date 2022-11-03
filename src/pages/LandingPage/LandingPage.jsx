import React, { Component } from 'react';
import {
  Tabs, Tab, Row, Modal,
} from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import Translator from '../../assets/i18n/Translator';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Header from '../../components/Header/Header';
import Languages from '../../components/LangMenu/LangMenu';
import ShareModal from '../../components/ShareModal/ShareModal';
import ScheduleCongress from '../../components/ScheduleCongress/ScheduleCongress';
import Track from '../../components/Track/Track';
import Attractions from '../../components/Attractions/Attractions';
import cornerTopL from '../../assets/images/left-top-big.png';
import cornerTopR from '../../assets/images/right-top-big.png';
import cornerBottomL from '../../assets/images/left-bottom-big.png';
import cornerBottomR from '../../assets/images/right-bottom-big.png';
import smallIconL from '../../assets/images/left-top-small.png';
import smallIconR from '../../assets/images/right-top-small.png';
import opening from '../../assets/images/opening2023.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import instagramIcon from '../../assets/images/instagram.png';
import facebookIcon from '../../assets/images/facebook.png';
import shareIcon from '../../assets/images/share.png';
import promo from '../../assets/images/blindPass.jpeg';
import './style.scss';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isModalShareOn: false,
      promoAlert: true,
    };

    this.showShareModal = this.showShareModal.bind(this);
  }

  showShareModal(bool) {
    this.setState({ isModalShareOn: bool });
  }

  render() {
    const { isModalShareOn, promoAlert } = this.state;
    return (
      <>
        <Modal show={promoAlert} onHide={() => this.setState({ promoAlert: false })}>
          <Modal.Body>
            <img className="promo" src={promo} alt="Promo Advertising" />
          </Modal.Body>
        </Modal>

        <Header />

        <main>
          <Languages />

          <article className="major-main">
            <section id="section-one" className="main-splits parallax">

              <div className="d-flex align-items-start col-2">
                <Fade direction="down" delay="50">
                  <img className="corners" src={cornerTopL} alt="left-top-corner" />
                </Fade>
              </div>

              <div className="opening col-8">
                <Fade direction="up" delay="100">
                  <img className="logo" src={opening} alt="opening-presents" />
                </Fade>

                <Fade delay="150">
                  <div className="date">
                    <p>
                      <Translator path="home.text1" />
                    </p>
                    <p>
                      <Translator path="home.text2" />
                    </p>
                  </div>
                </Fade>
              </div>

              <div className="d-flex flex-row-reverse align-items-start col-2">
                <Fade direction="down" delay="50">
                  <img className="corners" src={cornerTopR} alt="right-top-corner" />
                </Fade>
              </div>

            </section>

            <section className="d-flex main-splits" id="section-two">
              <div className="col-6 text">
                <p>
                  <Translator path="history.ourHistory" />
                  <Translator path="history.ourHistory2" />
                  <Translator path="history.ourHistory2" />
                </p>
              </div>

              <div className="col-6 photos">
                <p>
                  <Translator path="history.ourHistory2" />
                </p>
              </div>
            </section>

            <section className="d-flex main-splits" id="section-three">

              <div className="d-flex align-items-center col-2">
                <img className="corners" src={smallIconL} alt="left-top-corner" />
              </div>

              <div className="d-flex flex-column align-content-center justify-content-center col-8">
                <Tabs
                  className="mb-3"
                  defaultActiveKey="attractions"
                  justify
                >
                  <Tab eventKey="attractions" title={<Translator path="congress.tabAttractions.btnAttractions" />}>
                    <Attractions />
                  </Tab>
                  <Tab eventKey="schedule" title={<Translator path="congress.tabSchedule.btnSchedule" />}>
                    <ScheduleCongress />
                  </Tab>
                  <Tab eventKey="map" title={<Translator path="congress.tabMap.btnMap" />}>
                    <Track />
                  </Tab>
                </Tabs>
              </div>

              <div className="d-flex flex-row-reverse align-items-center col-2">
                <img className="corners" src={smallIconR} alt="right-top-corner" />
              </div>

            </section>

            <section className="main-splits" id="section-four">

              <div className="d-flex align-items-end col-2">
                <img className="corners" src={cornerBottomL} alt="left-bottom-corner" />
              </div>

              <div className="subscription col-8">
                <Row>
                  <SignUpForm />
                </Row>

                <Row>
                  <h2 className="call-us">
                    <Translator path="registration.webSocial" />
                  </h2>
                  <div className="col-8 call-icons">
                    <a
                      href="https://api.whatsapp.com/send?phone=5581996694649&text=Ol%C3%A1%2C%20estou%20interessado%20em%20me%20inscrever%20no%20%22Forr%C3%B3%20do%20Ultra%22!!!"
                      target="_blank"
                      rel="external noreferrer"
                    >
                      <input className="contact-icons" type="image" src={whatsappIcon} alt="whatsapp-icon" />
                    </a>

                    <a href="https://www.instagram.com/ultract/" target="_blank" rel="external noreferrer">
                      <input className="contact-icons" type="image" src={instagramIcon} alt="instagram-icon" />
                    </a>

                    <a href="https://web.facebook.com/UltraCTBR" target="_blank" rel="external noreferrer">
                      <input className="contact-icons" type="image" src={facebookIcon} alt="facebook-icon" />
                    </a>

                  </div>

                  <div className="col-4 share-icons">
                    <input
                      className="contact-icons"
                      onClick={() => this.showShareModal(true)}
                      type="image"
                      src={shareIcon}
                      alt="share-icon"
                    />
                  </div>
                </Row>
                <ShareModal
                  showShareModal={this.showShareModal}
                  isModalShareOn={isModalShareOn}
                />
              </div>

              <div className="d-flex flex-row-reverse align-items-end col-2">
                <img className="corners" src={cornerBottomR} alt="right-bottom-corner" />
              </div>
            </section>
          </article>
        </main>
      </>
    );
  }
}

export default LandingPage;
