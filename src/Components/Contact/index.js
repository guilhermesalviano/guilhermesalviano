import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <div className="app-contact" id="app-contact">
            <h2>Contatos</h2>
            <div className="app-contact-container">
                <input placeholder="seu nome" />
                <input placeholder="seu e-mail"/>
                <textarea placeholder="use este espaco para falar um pouco sobre sua ideia,
                    coloque link de imagens para referencias, site de referencia."/>
                <button>enviar</button>
            </div>
        </div>
    );
}

export default Contact;