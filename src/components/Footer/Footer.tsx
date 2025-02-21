import styles from "./Footer.module.css";
import grassHill from "../../assets/GrassHill.png"; // Importez l'image de la colline

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.grassContainer}>
				<img
					src={grassHill}
					alt="Colline d'herbe"
					className={styles.grassImage}
				/>
			</div>
			<p className={styles.copyright}>
				© 2024 Charles Catto. Tous droits réservés.
			</p>
		</footer>
	);
}

export default Footer;
