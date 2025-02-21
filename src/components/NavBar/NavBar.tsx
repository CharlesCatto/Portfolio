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
					<a href="/" className={styles.navbar__link}>
						Home
					</a>

					{/* Projects Dropdown */}
					<div className={styles.navbar__dropdown}>
						<span className={styles.navbar__link}>Projects</span>
						<div className={styles.navbar__dropdownContent}>
							<a href="!#">FirstType</a>
							<a href="!#">SecondType</a>
							<a href="!#">ThirdType</a>
						</div>
					</div>

					{/* About Dropdown */}
					<div className={styles.navbar__dropdown}>
						<span className={styles.navbar__link}>About</span>
						<div className={styles.navbar__dropdownContent}>
							<a href="!#">Hobbies</a>
							<a href="!#">Passions</a>
							<a href="!#">Future</a>
						</div>
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
