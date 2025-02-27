import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			{/* Navbar */}
			<nav className={styles.navbar}>
				{/* Menu Burger pour mobile */}
				<div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
					<span className={styles.bar} />
					<span className={styles.bar} />
					<span className={styles.bar} />
				</div>

				{/* Liens de la NavBar */}
				<div
					className={`${styles.navbar__links} ${
						isMobileMenuOpen ? styles.active : ""
					}`}
				>
					{/* Home */}
					<a href="#home" className={styles.navbar__link}>
						Home
					</a>

					{/* Projects Dropdown */}
					<div className={styles.navbar__dropdown}>
						<span className={styles.navbar__link}>Projects</span>
						<div className={styles.navbar__dropdownContent}>
							<a href="#project-1">Quiz</a>
							<a href="#project-2">maVille</a>
							<a href="#project-3">Travel Up</a>
							<a href="#project-4">Karotaine</a>
							<a href="#project-5">Sandra's Market</a>
						</div>
					</div>

					{/* About Dropdown */}
					<div className={styles.navbar__dropdown}>
						<a href="#about">
							<span className={styles.navbar__link}>About</span>
						</a>
					</div>

					{/* Skills Dropdown */}
					<div className={styles.navbar__dropdown}>
						<a href="#skills">
							<span className={styles.navbar__link}>Skills</span>
						</a>
					</div>

					{/* Social Dropdown */}
					<div className={styles.navbar__dropdown}>
						<span className={styles.navbar__link}>Social</span>
						<div className={styles.navbar__dropdownContent}>
							<a href="!#">Facebook</a>
							<a href="!#">Instagram</a>
							<a href="!#">X</a>
							<a href="!#">Forbes</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
