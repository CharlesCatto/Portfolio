// // // import type React from "react";
// // // import "./Cloud.css";

// // // // Importation des images de nuages
// // // import realCloud1 from "../../assets/realClouds/realCloud1.png";
// // // import realCloud2 from "../../assets/realClouds/realCloud2.png";
// // // import realCloud3 from "../../assets/realClouds/realCloud3.png";
// // // import realCloud4 from "../../assets/realClouds/realCloud4.png";
// // // import realCloud5 from "../../assets/realClouds/realCloud5.png";
// // // import realCloud6 from "../../assets/realClouds/realCloud6.png";
// // // import realCloud7 from "../../assets/realClouds/realCloud7.png";
// // // import realCloud8 from "../../assets/realClouds/realCloud8.png";
// // // import realCloud9 from "../../assets/realClouds/realCloud9.png";
// // // import realCloud10 from "../../assets/realClouds/realCloud10.png";
// // // import realCloud11 from "../../assets/realClouds/realCloud11.png";
// // // import realCloud12 from "../../assets/realClouds/realCloud12.png";

// // // type CloudProps = {
// // // 	id: number;
// // // 	size: number;
// // // 	top: number;
// // // 	speed: number;
// // // };

// // // const Cloud: React.FC<CloudProps> = ({ id, size, top, speed }) => {
// // // 	// Tableau des images de nuages
// // // 	const cloudImages = [
// // // 		realCloud1,
// // // 		realCloud2,
// // // 		realCloud3,
// // // 		realCloud4,
// // // 		realCloud5,
// // // 		realCloud6,
// // // 		realCloud7,
// // // 		realCloud8,
// // // 		realCloud9,
// // // 		realCloud10,
// // // 		realCloud11,
// // // 		realCloud12,
// // // 	];

// // // 	// Sélection aléatoire d'une image de nuage
// // // 	const randomCloudImage =
// // // 		cloudImages[Math.floor(Math.random() * cloudImages.length)];

// // // 	// Ajustement de l'opacité : plus le nuage est gros, plus il est opaque
// // // 	const opacity = size / 1000; // Plus c'est gros, plus c'est opaque

// // // 	return (
// // // 		<div
// // // 			className="cloud"
// // // 			data-size={size > 500 ? "big" : "small"}
// // // 			style={{
// // // 				width: `${size}px`,
// // // 				height: `${size / 2}px`,
// // // 				top: `${top}%`,
// // // 				animationDuration: `${speed}s`,
// // // 				opacity: opacity, // Opacité dynamique
// // // 				backgroundImage: `url(${randomCloudImage})`, // Image de nuage aléatoire
// // // 			}}
// // // 		/>
// // // 	);
// // // };

// // // export default Cloud;
// // import type React from "react";
// // import { useEffect, useState } from "react";
// // import "./Cloud.css";

// // // Importation des images de nuages
// // import realCloud1 from "../../assets/realClouds/realCloud1.png";
// // import realCloud2 from "../../assets/realClouds/realCloud2.png";
// // import realCloud3 from "../../assets/realClouds/realCloud3.png";
// // import realCloud4 from "../../assets/realClouds/realCloud4.png";
// // import realCloud5 from "../../assets/realClouds/realCloud5.png";
// // import realCloud6 from "../../assets/realClouds/realCloud6.png";
// // import realCloud7 from "../../assets/realClouds/realCloud7.png";
// // import realCloud8 from "../../assets/realClouds/realCloud8.png";
// // import realCloud9 from "../../assets/realClouds/realCloud9.png";
// // import realCloud10 from "../../assets/realClouds/realCloud10.png";
// // import realCloud11 from "../../assets/realClouds/realCloud11.png";
// // import realCloud12 from "../../assets/realClouds/realCloud12.png";

// // type CloudProps = {
// // 	id: number;
// // 	size: number;
// // 	top: number;
// // 	speed: number;
// // };

// // const Cloud: React.FC<CloudProps> = ({ id, size, top, speed }) => {
// // 	const [isVisible, setIsVisible] = useState(false);

// // 	// Délai aléatoire avant l'apparition du nuage
// // 	useEffect(() => {
// // 		const delay = Math.random() * 30 * 1000; // Délai entre 0 et 30 secondes
// // 		const timer = setTimeout(() => {
// // 			setIsVisible(true);
// // 		}, delay);

// // 		return () => clearTimeout(timer); // Nettoyage du timer
// // 	}, []);

// // 	// Tableau des images de nuages
// // 	const cloudImages = [
// // 		realCloud1,
// // 		realCloud2,
// // 		realCloud3,
// // 		realCloud4,
// // 		realCloud5,
// // 		realCloud6,
// // 		realCloud7,
// // 		realCloud8,
// // 		realCloud9,
// // 		realCloud10,
// // 		realCloud11,
// // 		realCloud12,
// // 	];

// // 	// Sélection aléatoire d'une image de nuage
// // 	const randomCloudImage =
// // 		cloudImages[Math.floor(Math.random() * cloudImages.length)];

// // 	// Ajustement de l'opacité : plus le nuage est gros, plus il est opaque
// // 	const opacity = size / 1000; // Plus c'est gros, plus c'est opaque

// // 	return (
// // 		<div
// // 			className="cloud"
// // 			data-size={size > 500 ? "big" : "small"}
// // 			style={{
// // 				width: `${size}px`,
// // 				height: `${size / 2}px`,
// // 				top: `${top}%`,
// // 				animationDuration: `${speed}s`,
// // 				opacity: isVisible ? opacity : 0, // Opacité dynamique
// // 				backgroundImage: `url(${randomCloudImage})`, // Image de nuage aléatoire
// // 				transition: "opacity 2s ease-in-out", // Transition pour l'apparition
// // 			}}
// // 		/>
// // 	);
// // };

// // export default Cloud;
// import type React from "react";
// import "./Cloud.css";

// type CloudProps = {
// 	size: number;
// 	top: number;
// 	speed: number;
// 	image: string; // Ajout de l'image en tant que prop
// };

// const Cloud: React.FC<CloudProps> = ({ size, top, speed, image }) => {
// 	// Ajustement de l'opacité : plus le nuage est gros, plus il est opaque
// 	const opacity = size / 1000; // Plus c'est gros, plus c'est opaque

// 	return (
// 		<div
// 			className="cloud"
// 			data-size={size > 500 ? "big" : "small"}
// 			style={{
// 				width: `${size}px`,
// 				height: `${size / 2}px`,
// 				top: `${top}%`,
// 				animationDuration: `${speed}s`,
// 				opacity: opacity, // Opacité dynamique
// 				backgroundImage: `url(${image})`, // Utilisation de l'image passée en prop
// 			}}
// 		/>
// 	);
// };

// export default Cloud;
import type React from "react";
import "./Cloud.css";

type CloudProps = {
	size: number;
	top: number;
	speed: number;
	image: string;
	left: number | null; // Ajout de la position horizontale
};

const Cloud: React.FC<CloudProps> = ({ size, top, speed, image, left }) => {
	// Ajustement de l'opacité : plus le nuage est gros, plus il est opaque
	const opacity = size / 1000; // Plus c'est gros, plus c'est opaque

	return (
		<div
			className="cloud"
			data-size={size > 500 ? "big" : "small"}
			style={{
				width: `${size}px`,
				height: `${size / 2}px`,
				top: `${top}%`,
				left: left !== null ? `${left}%` : "-500px", // Position horizontale
				animationDuration: `${speed}s`,
				opacity: opacity, // Opacité dynamique
				backgroundImage: `url(${image})`, // Utilisation de l'image passée en prop
			}}
		/>
	);
};

export default Cloud;
