import styles from "./Hero.module.css";

function Hero() {
	return (
		<section className={styles.hero}>
			<h1 className={styles.heroTitle}>
				Hi, <br />
				I'm <span className={styles.highlight}>Charles Catto</span>
			</h1>
		</section>
	);
}

export default Hero;
