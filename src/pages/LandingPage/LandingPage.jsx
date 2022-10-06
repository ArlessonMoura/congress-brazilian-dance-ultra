import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Header from '../../components/Header/Header';
import Languages from '../../components/LangMenu/LangMenu';
import ShareModal from '../../components/ShareModal/ShareModal';
import cornerTopL from '../../assets/images/left-top-big.png';
import cornerTopR from '../../assets/images/right-top-big.png';
import cornerBottomL from '../../assets/images/left-bottom-big.png';
import cornerBottomR from '../../assets/images/right-bottom-big.png';
import opening from '../../assets/images/opening-2023.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import instagramIcon from '../../assets/images/instagram.png';
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
          <article>
            <section id="section-one" className="parallax">

              <div className="corners col-2">
                <img src={cornerTopL} alt="left-top-corner" />
              </div>

              <div className="opening col-8">
                <img src={opening} alt="opening-presents" />
                <div className="date">
                  <p>21, 22 e 23 de Abril.</p>
                  <p>Corre que está chegando!</p>
                </div>
              </div>

              <div className="corners col-2">
                <img src={cornerTopR} alt="right-top-corner" />
              </div>

            </section>

            <section id="section-two">
              <p>Hello World!</p>
              <h1>Segmento 2</h1>
            </section>

            <section id="section-three">
              <p>Hello World!</p>
              <h1>Segmento 3</h1>
            </section>

            <section id="section-four">
              <img className="col-2" src={cornerBottomL} alt="left-bottom-corner" />
              <div className="form col-8">
                <SignUpForm />

                <div className="d-flex justify-content-center contacts">
                  <a
                    className="col-4"
                    href="https://api.whatsapp.com/send?phone=5581996694649&text=Ol%C3%A1%2C%20estou%20interessado%20em%20me%20inscrever%20no%20%22Forr%C3%B3%20do%20Ultra%22!!!"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    <input className="contact-icons" type="image" src={whatsappIcon} alt="whatsapp-icon" />
                  </a>
                  <a className="col-4" href="https://www.instagram.com/ultract/" target="_blank" rel="external noreferrer">
                    <input className="contact-icons" type="image" src={instagramIcon} alt="instagram-icon" />
                  </a>

                  <input onClick={() => this.showShareModal(true)} className="contact-icons" type="image" src={shareIcon} alt="share-icon" />
                  <ShareModal
                    showShareModal={this.showShareModal}
                    isModalShareOn={isModalShareOn}
                  />
                </div>

              </div>
              <img className="col-2" src={cornerBottomR} alt="right-bottom-corner" />
            </section>
          </article>
        </main>
      </>
    );
  }
}

export default LandingPage;
