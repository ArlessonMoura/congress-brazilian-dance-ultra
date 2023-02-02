import React from 'react';
import { useTranslation } from 'react-i18next';
import brazilBtn from '../../assets/images/brazil.png';
import usBtn from '../../assets/images/usa.png';
import franceBtn from '../../assets/images/france.png';
import './style.scss';

function LangMenu() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <aside>
      <nav className="nav-lang">
        <input className="languages-icons" type="image" src={brazilBtn} alt="set-portuguese-lang" onClick={() => handleChangeLanguage('pt-BR')} />
        <input className="languages-icons" type="image" src={usBtn} alt="set-english-lang" onClick={() => handleChangeLanguage('en-US')} />
        <input className="languages-icons" type="image" src={franceBtn} alt="set-french-lang" onClick={() => handleChangeLanguage('fr-FR')} />
      </nav>
    </aside>
  );
}

export default LangMenu;
