import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import "./App.css";
import { useEffect, useRef } from "react";

function App() {
	const cloudsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateCloudsContainerHeight = () => {
			if (cloudsContainerRef.current) {
				// Calculez la hauteur totale du contenu
				const mainContainer = document.querySelector(".mainContainer");
				if (mainContainer) {
					const height = mainContainer.scrollHeight;
					console.log("Hauteur totale du contenu :", height); // Log pour vérifier
					cloudsContainerRef.current.style.height = `${height}px`;
				}
			}
		};

		// Mettre à jour la hauteur après le chargement du DOM
		const timeoutId = setTimeout(updateCloudsContainerHeight, 100); // Délai pour s'assurer que le DOM est chargé

		// Mettre à jour la hauteur au redimensionnement de la fenêtre
		window.addEventListener("resize", updateCloudsContainerHeight);

		// Nettoyer l'écouteur d'événement et le timeout lors du démontage du composant
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("resize", updateCloudsContainerHeight);
		};
	}, []);

	return (
		<>
			<div className="mainContainer">
				<div className="componentContainer">
					<NavBar />
					<Hero />
					<About id="about" /> {/* Ajout de l'ID "about" */}
					<Projects id="projects" /> {/* Ajout de l'ID "projects" */}
				</div>
				<Footer />
			</div>

			{/* Conteneur pour les nuages */}
			<div className="cloudsContainer" ref={cloudsContainerRef}>
				<Background />
			</div>
		</>
	);
}

export default App;
