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
