import type React from "react";
import { useEffect, useState } from "react";
import Cloud from "./Cloud";
import styles from "./Background.module.css";

// Importation des images de nuages
import realCloud1 from "../../assets/realClouds/realCloud1.png";
import realCloud2 from "../../assets/realClouds/realCloud2.png";
import realCloud3 from "../../assets/realClouds/realCloud3.png";
import realCloud4 from "../../assets/realClouds/realCloud4.png";
import realCloud5 from "../../assets/realClouds/realCloud5.png";
import realCloud6 from "../../assets/realClouds/realCloud6.png";
import realCloud7 from "../../assets/realClouds/realCloud7.png";
import realCloud8 from "../../assets/realClouds/realCloud8.png";
import realCloud9 from "../../assets/realClouds/realCloud9.png";
import realCloud10 from "../../assets/realClouds/realCloud10.png";
import realCloud11 from "../../assets/realClouds/realCloud11.png";
import realCloud12 from "../../assets/realClouds/realCloud12.png";

const cloudImages = [
	realCloud1,
	realCloud2,
	realCloud3,
	realCloud4,
	realCloud5,
	realCloud6,
	realCloud7,
	realCloud8,
	realCloud9,
	realCloud10,
	realCloud11,
	realCloud12,
];

const generateClouds = () => {
	const clouds = [];
	const usedHeights = new Set(); // Pour éviter les chevauchements

	for (let i = 0; i < 30; i++) {
		let size: number;
		let top: number;
		let left: number | null = null; // Position horizontale (null pour les nuages progressifs)

		// Générer une taille et une hauteur uniques
		do {
			size = Math.floor(Math.random() * 1500) + 1200; // Taille entre 250px et 1000px
			top = Math.floor(Math.random() * 80) + 10; // Hauteur entre 10% et 90%
		} while (usedHeights.has(top)); // Vérifier que la hauteur n'est pas déjà utilisée

		usedHeights.add(top); // Ajouter la hauteur à l'ensemble des hauteurs utilisées

		// Limitation de la vitesse entre 40s et 50s
		const speed = Math.max(70, Math.min(70, 100 - size / 10));

		// Sélection aléatoire d'une image de nuage
		const image = cloudImages[Math.floor(Math.random() * cloudImages.length)];

		// Pour les premiers nuages, définir une position horizontale aléatoire dans la zone visible
		if (i < 10) {
			// 10 nuages pré-générés
			left = Math.random() * 100; // Position horizontale entre 0% et 100%
		}

		clouds.push({ id: i, size, top, speed, image, left });
	}

	return clouds;
};

const Background: React.FC = () => {
	const [clouds, setClouds] = useState<
		Array<{
			id: number;
			size: number;
			top: number;
			speed: number;
			image: string;
			left: number | null;
		}>
	>([]);

	useEffect(() => {
		const allClouds = generateClouds();

		// Ajouter les nuages pré-générés immédiatement
		const preGeneratedClouds = allClouds.filter((cloud) => cloud.left !== null);
		setClouds(preGeneratedClouds);

		// Générer les nuages progressifs avec un délai aléatoire
		const progressiveClouds = allClouds.filter((cloud) => cloud.left === null);
		for (const cloud of progressiveClouds) {
			const delay = Math.random() * 30 * 1000; // Délai entre 0 et 30 secondes
			setTimeout(() => {
				setClouds((prevClouds) => [...prevClouds, cloud]);
			}, delay);
		}
	}, []);

	return (
		<div className={styles.background}>
			{clouds.map((cloud) => (
				<Cloud key={`cloud_${cloud.id}`} {...cloud} /> // Utilisation d'une clé unique
			))}
		</div>
	);
};

export default Background;
