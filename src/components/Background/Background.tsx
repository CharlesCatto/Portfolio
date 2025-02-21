import type React from "react";
import Cloud from "./Cloud";
import styles from "./Background.module.css";

const generateClouds = () => {
	return Array.from({ length: 30 }, (_, id) => {
		const size = Math.floor(Math.random() * 750) + 250;
		const top = Math.random() * 100;
		let speed = 80 - size / 10;

		speed = Math.max(30, Math.min(50, speed));

		return { id, size, top, speed };
	});
};

const Background: React.FC = () => {
	const clouds = generateClouds();

	return (
		<div className={styles.background}>
			{clouds.map((cloud) => (
				<Cloud key={cloud.id} {...cloud} />
			))}
		</div>
	);
};

export default Background;
