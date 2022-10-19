import React from 'react';
import PropTypes from 'prop-types';
import brazilBtn from '../../assets/images/brazil.svg';
import usBtn from '../../assets/images/usa.svg';
import franceBtn from '../../assets/images/france.svg';

import './style.scss';

function LangMenu(props) {
  const { handleLanguages } = props;
  return (
    <aside>
      <nav className="nav-lang">
        <input className="languages-icons" type="image" src={brazilBtn} alt="set-portuguese-lang" onClick={() => handleLanguages('pt-br')} />
        <input className="languages-icons" type="image" src={usBtn} alt="set-english-lang" onClick={() => handleLanguages('en')} />
        <input className="languages-icons" type="image" src={franceBtn} alt="set-french-lang" onClick={() => handleLanguages('fr')} />
      </nav>
    </aside>
  );
}

LangMenu.propTypes = {
  handleLanguages: PropTypes.func.isRequired,
};

export default LangMenu;
