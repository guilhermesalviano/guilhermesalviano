import React from 'react';
import {
	FaGithub,
} from "react-icons/fa";
import './styles.css';

const Services = () => {
    return (
        <div className="app-services" id="app-services">
            <h2>Serviços</h2>
            <div className="app-services-container">
                <div className="app-service">
                    <FaGithub size={52} color="#fff" />
                    <h4>Criacao de Sites</h4>
                    <p>Desenvolvimento de Sites responsivos com HTML5, CSS3 e JavaScript.</p>
                </div>
                <div className="app-service">
                    <FaGithub size={52} color="#fff" />
                    <h4>Estrategias de CRM</h4>
                    <p>Desenvolvimento de Sites responsivos com HTML5, CSS3 e JavaScript.</p>
                </div>
                <div className="app-service">
                    <FaGithub size={52} color="#fff" />
                    <h4>Desenvolvimento de Sistemas</h4>
                    <p>Desenvolvimento de Sites responsivos com HTML5, CSS3 e JavaScript.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;