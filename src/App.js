import React from "react";
import About from "./Components/About";
import Services from "./Components/Services";
import Portifolio from "./Components/Portifolio";
import TypeIt from "typeit-react";
import {
	FaGithub,
	FaLinkedinIn,
	FaWhatsapp,
	FaAngleDown,
} from "react-icons/fa";
import imgPerfil from "./images/perfil.jpeg";
import "./App.css";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="App">
			<div className="nav-header">
				<ul>
					<li><a href="#app-content">Início</a></li>
					<li><a href="#app-about">Sobre</a></li>
					<li><a href="#app-services">Serviços</a></li>
					<li><a href="#app-portifolio">Portfólio</a></li>
					{/* <li><a href="#app-contact">Blog</a></li> */}
					{/* <li><a href="#app-contact">Contatos</a></li> */}
				</ul>
			</div>
			<div className="App-Content" id="app-content">
				<div className="App-content-text">
					<div id="App-Text">
						<h3>Olá, eu sou o Guilherme.</h3>
						<TypeIt element={"span"}
							getBeforeInit={(instance) => {
								console.log(instance);
								instance
									.type("E sou Fullstack Developer!")
									.pause(750)
									.delete(20)
									.pause(300)
									.type("CRM Analyst!")
									.pause(1050)
									.delete(12)
									.pause(300)
									.type("ex-jogador de lolzinho!")
									.pause(750)
									.delete(23)
									.pause(300)
									.type("Fullstack Developer!")
									.pause(750)
									.delete(20)
									.pause(300)
									.type("CRM Analyst!")
									.unfreeze();
								return instance;
							}}
							
						/>
					</div>
					<div className="App-Contacts">
						<ul className="contacts-list">
						<li className="contacts-item">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/guilhermesalviano/Projects"
							>
								<FaGithub size={30} color="#fff" />
							</a>
						</li>
						<li className="contacts-item">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/guilherme-salviano/"
							>
								<FaLinkedinIn size={30} color="#fff" />
							</a>
						</li>
						<li className="contacts-item">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://api.whatsapp.com/send?1=pt_BR&phone=5511948449969&text=Olá+Guilherme,+encontrei+seu+número+pelo+seu+site+e+"
							>
								<FaWhatsapp size={30} color="#fff" />
							</a>
						</li>
					</ul>
					</div>
				</div>
				<div className="App-Content-Image">
					<img src={imgPerfil} className="App-profile" alt="Eu" />
				</div>
			</div>
			<div className="App-Scroll-Button">
				<a href="#app-about"><FaAngleDown size={52} color="#fff" /></a>
			</div>
			<About />
			<Services />
			<Portifolio />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
}

export default App;
