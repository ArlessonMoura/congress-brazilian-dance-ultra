import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import './style.scss';

function ModalLGPD(props) {
  const { isModalOn, showModal } = props;
  return (
    <Modal
      show={isModalOn}
      onHide={() => showModal(false)}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Política de Privacidade</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <article>
          <p>
            &quotForró do Ultra &trade;&quot se compromete com a transparência no
            tratamento de dados pessoais dos nossos usuários/clientes.
            Por isso, esta presente Política de Privacidade estabelece
            que os dados coletados na inscrição do evento
            estarão sob posse única da organização do evento, com finalidades restritas a:

            1 - Identificação dos participantes e controle de pagamentos;
            2 - Uso em futuras ações de divulgação do &quotForró do Ultra &trade;&quot
            e suas marcas adjacentes.

          </p>
          <p>
            Ao utilizar nossos serviços, você entende que coletaremos
            e usaremos suas informações pessoais nas formas descritas nesta Política,
            sob as normas da Constituição Federal de 1988
            (art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022),
            das normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018),
            das disposições consumeristas da Lei Federal 8078/1990
            e as demais normas do ordenamento jurídico brasileiro aplicáveis.
          </p>
        </article>
      </Modal.Body>
    </Modal>
  );
}

ModalLGPD.propTypes = {
  isModalOn: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ModalLGPD;
