import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
}
// function PageHeader() {  //sem propriedades
  //tenho um componente chamado PageHeader ele é um functionComponent
  //e as propriedades q ele tem sao <essas aqui>. (props) essas são minhas propriedades
const PageHeader: React.FC<PageHeaderProps> = (props) => { //p passar parametro p componente
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt=""/>
        </Link>
        <img src={logoImg} alt=""/>
      </div>

      <div className="header-content">
        <strong>
          {props.title} 
          {/* children - qual conteudo escrevi no componente */}
        </strong>
          
          {props.children}
          {/* children - qual conteudo escrevi dentro do meu componente */}
      </div>

    </header>
  );
}

export default PageHeader;