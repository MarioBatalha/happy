import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/lading.css'; 
import logoImg from '../img/LogoImg.svg';


function Landing() {
    return (
        <div id="page-lading">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidades para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Luanda</strong>
          <span>Futungo de Belas</span>
        </div>
        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
    );
}

export default Landing;