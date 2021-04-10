import React from 'react';
import {
    FaUserPlus
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GiSolarSystem } from "react-icons/gi";
import './styles.css';

const Services = () => {
    return (
        <div className="app-services" id="app-services">
            <h2>Serviços</h2>
            <div className="app-services-container">
                <div className="app-service">
                    <CgWebsite size={52} color="#fff" />
                    <h4>Criação de Sites</h4>
                    <p>Desenvolvimento de Sites responsivos com HTML5, CSS3 e JavaScript.</p>
                </div>
                <div className="app-service">
                    <FaUserPlus size={52} color="#fff" />
                    <h4>Estratégias de CRM</h4>
                    <p>Desenvolvimento de estatégias de Marketing Digital para captura e conversão de leads.</p>
                </div>
                <div className="app-service">
                    <GiSolarSystem size={52} color="#fff" />
                    <h4>Desenvolvimento de Sistemas</h4>
                    <p>Desenvolvimento de Sistemas complexos de vendas e controle de processos internos.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;