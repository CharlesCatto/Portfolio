import styles from "./Hero.module.css";
import nuage from "../../assets/nuage.png"; // Importez l'image de Nuage
import nuageArrow from "../../assets/nuageArrow.png"; // Importez l'image de la flèche

function Hero() {
	return (
		<section className={styles.hero}>
			<h1 className={styles.heroTitle}>
				Hi, <br />
				I'm <span className={styles.highlight}>Charles Catto</span>
			</h1>

			{/* Ajoutez Nuage et la flèche */}
			<div className={styles.nuageContainer}>
				<img src={nuage} alt="Nuage" className={styles.nuage} />
				<img src={nuageArrow} alt="Flèche" className={styles.nuageArrow} />
			</div>
		</section>
	);
}

export default Hero;
