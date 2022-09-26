import React from 'react';
import brazilBtn from '../../assets/images/brazil.png';
import usBtn from '../../assets/images/usa.png';
import franceBtn from '../../assets/images/france.png';
import './style.scss';

function LangMenu() {
  return (
    <aside>
      <nav className="nav-lang">
        <input className="languages-icons" type="image" src={brazilBtn} alt="set-portuguese-lang" />
        <input className="languages-icons" type="image" src={usBtn} alt="set-english-lang" />
        <input className="languages-icons" type="image" src={franceBtn} alt="set-french-lang" />
      </nav>
    </aside>
  );
}

export default LangMenu;
