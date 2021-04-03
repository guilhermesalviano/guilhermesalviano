import React from 'react';
import gigprintImg from "../../images/gigprint_telas.jpg";
import './styles.css';

const Portifolio = () => {
    return (
        <div className="app-portifolio" id="app-portifolio">
            <h2>Portfólio</h2>
            <div className="app-portifolio-container">
                <div className="app-portifolio">
                    <img src={gigprintImg} alt="GIGPrint" width="320"/>
                </div>
                <div className="app-portifolio">
                    <img src={gigprintImg} alt="GIGPrint" width="320"/>
                </div>
            </div>
        </div>
    );
}

export default Portifolio;