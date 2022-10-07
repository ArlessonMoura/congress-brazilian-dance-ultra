import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Header from '../../components/Header/Header';
import Languages from '../../components/LangMenu/LangMenu';
import ShareModal from '../../components/ShareModal/ShareModal';
import ScheduleCongress from '../../components/ScheduleCongress/ScheduleCongress';
import Track from '../../components/Track/Track';
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
import './style.scss';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isModalShareOn: false,
    };

    this.showShareModal = this.showShareModal.bind(this);
  }

  showShareModal(bool) {
    this.setState({ isModalShareOn: bool });
  }

  render() {
    const { isModalShareOn } = this.state;
    return (
      <>
        <Header />
        <main>
          <Languages />
          <article className="major-main">
            <section id="section-one" className="main-splits parallax">

              <div className="d-flex align-items-start col-2">
                <img className="corners" src={cornerTopL} alt="left-top-corner" />
              </div>

              <div className="opening col-8">
                <img src={opening} alt="opening-presents" />
                <div className="date">
                  <p>21, 22 e 23 de Abril.</p>
                  <p>Corre que está chegando!</p>
                </div>
              </div>

              <div className="d-flex flex-row-reverse align-items-start col-2">
                <img className="corners" src={cornerTopR} alt="right-top-corner" />
              </div>

            </section>

            <section className="main-splits" id="section-two">
              <p>Hello World!</p>
              <h1>Segmento 2</h1>
            </section>

            <section className="d-flex main-splits" id="section-three">

              <div className="d-flex align-items-center col-2">
                <img className="corners" src={smallIconL} alt="left-top-corner" />
              </div>

              <div className="d-flex flex-column align-content-center justify-content-center col-8">
                <Tabs
                  className="mb-3"
                  defaultActiveKey="schedule"
                  justify
                >
                  <Tab eventKey="attractions" title="Atrações">
                    <ScheduleCongress />
                  </Tab>
                  <Tab eventKey="schedule" title="Cronograma">
                    <ScheduleCongress />
                  </Tab>
                  <Tab eventKey="map" title="Como chegar">
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

                <SignUpForm />

                <nav className="d-flex flex-column align-items-center web-social">

                  <div className="d-flex flex-column align-items-center contacts">
                    <h2>Fale com um representante</h2>
                    <div className="links">
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
                  </div>

                  <div className="d-flex flex-column align-items-center share">
                    <h2>Compartilhe nas redes</h2>
                    <input
                      className="contact-icons"
                      onClick={() => this.showShareModal(true)}
                      type="image"
                      src={shareIcon}
                      alt="share-icon"
                    />
                    <ShareModal
                      showShareModal={this.showShareModal}
                      isModalShareOn={isModalShareOn}
                    />
                  </div>
                </nav>
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
