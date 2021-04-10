import React from 'react';
import imgPdf from '../../images/pdf.png';
import './styles.css';

const DownloadCV = () => {
    return (
        <div className="app-download-cv" id="app-download-cv">
            <h2>Adote meu cv</h2>
            <a href="https://gui-outros-arquivos.s3-sa-east-1.amazonaws.com/Cur+Desenvolvedor.pdf" target="_blank" rel="noopener noreferrer">
                <img src={imgPdf} alt="pdf" width="70px" />
            </a>
        </div>
    );
}

export default DownloadCV;