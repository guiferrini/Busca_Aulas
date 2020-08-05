import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/60007731?s=460&u=27edaa0ac331278d60be9c30ce03cc4b1c977399&v=4"
          alt="Gui"
        />
        <div>
          <strong>Gui</strong>
          <span>Programador</span>
        </div>
      </header>
      <p>
        Prof de programação.
        <br /> <br />
        bla bla bla
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 65,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;