import React, { useEffect, useState } from 'react';
import gigprintImg from "../../images/gigprint_telas.jpg";
import aprendaAprenderImg from "../../images/aprenda-a-aprender-telas.jpg";
import studioElimarImg from "../../images/prints_studio_elimar.jpg";
import './styles.css';

const Portifolio = () => {
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState();

    function zoomImg(modal, imgClicked) {
        setModal(modal);
        setImg(imgClicked);
    }

    useEffect(() => {
        if(modal)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'unset';
    }, [modal]);

    return (
        <div id="app-portifolio">
            <div  onClick={() => setModal(!modal)} className={modal? "app-portifolio-modal-true" : "app-portifolio-modal-false"} >
                <img src={img} alt="GIGPrint" width="70%" />
            </div>
            <h2>Portfólio</h2>
            <div className="app-portifolio-container">
                <div className="app-portifolio">
                    <img src={gigprintImg} alt="GIGPrint" width="320" onClick={() => zoomImg(!modal, gigprintImg)}/>
                </div>
                <div className="app-portifolio">
                    <img src={aprendaAprenderImg} alt="GIGPrint" width="320" onClick={() => zoomImg(!modal, aprendaAprenderImg)}/>
                </div>
            </div>
            <div className="app-portifolio-container">
                <div className="app-portifolio">
                    <img src={studioElimarImg} alt="GIGPrint" width="320" onClick={() => zoomImg(!modal, studioElimarImg)}/>
                </div>
                <div className="app-portifolio">
                    <img src="https://github.com/Guibs1/ecoleta/raw/master/ecoleta-web.gif" alt="GIGPrint" height="195.5" onClick={() => zoomImg(!modal, "https://github.com/Guibs1/ecoleta/raw/master/ecoleta-web.gif")}/>
                </div>
            </div>
            <div className="app-portifolio-container">
                <div className="app-portifolio">
                    <img src="https://github.com/Guibs1/to-be-hero/raw/master/to-be-hero-web.gif" alt="GIGPrint" height="255" onClick={() => zoomImg(!modal, "https://github.com/Guibs1/to-be-hero/raw/master/to-be-hero-web.gif")}/>
                </div>
                <div className="app-portifolio">
                    <img src="https://raw.githubusercontent.com/Guibs1/messenger-copy/master/messenger_copy.gif" alt="GIGPrint" height="255" />
                </div>
            </div>
        </div>
    );
}

export default Portifolio;