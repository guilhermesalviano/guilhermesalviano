import React from 'react';
import TypeIt from "typeit-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import imgPerfil from './images/perfil.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={imgPerfil} className="App-profile" alt="Eu" />
        <div id="App-Text">
          <TypeIt
            
            getBeforeInit={instance => {
              instance
                .type("Olá, eu sou o Guibs!")
                .pause(750)
                .delete(3)
                .pause(300)
                .type("lherme!")
                .pause(500)
                .type("<br /><span class=\"App-Text-Description\">E sou um profissional de Marketing digital e Desenvolvedor nas horas vagas.</span>");
              return instance;
            }}
          />
        </div>
        <div className="App-Contacts">
          <ul className="contacts-list">
            <li className="contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Guibs1/Projects">
                <FaGithub size={52} color="#fff" />
              </a>
            </li>
            <li className="contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guilherme-salviano/">
                <FaLinkedinIn size={52} color="#fff" />
              </a>
            </li>
            <li className="contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/elguibs_/">
                <FaInstagram size={52} color="#fff" />
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default App;
