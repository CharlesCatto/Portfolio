import { useState } from "react";
import styles from "./NavBar.module.css";
import projectsData from "../Projects/projects.json";

function NavBar() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className={styles.navbar}>
			{/* Menu Burger pour mobile */}
			<div
				className={styles.mobileMenuIcon}
				onClick={toggleMobileMenu}
				onKeyDown={(e) => e.key === "Enter" && toggleMobileMenu()}
				tabIndex={0}
				role="button"
				aria-label="Toggle menu"
				aria-expanded={isMobileMenuOpen}
			>
				<span className={styles.bar} />
				<span className={styles.bar} />
				<span className={styles.bar} />
			</div>

			{/* Liens principaux */}
			<div
				className={`${styles.navbar__links} ${
					isMobileMenuOpen ? styles.active : ""
				}`}
			>
				<a href="#home" className={styles.navbar__link}>
					Home
				</a>

				{/* Dropdown Projects */}
				<div className={styles.navbar__dropdown}>
					<span className={styles.navbar__link}>Projects</span>
					<div className={styles.navbar__dropdownContent}>
						{projectsData.map((project) => (
							<a
								key={project.id}
								href={`#project-${project.id}`}
								className={styles.navbar__dropdownItem}
							>
								{project.name}
							</a>
						))}
					</div>
				</div>

				<a href="#about" className={styles.navbar__link}>
					About
				</a>

				<a href="#skills" className={styles.navbar__link}>
					Skills
				</a>

				{/* Social Dropdown */}
				<div className={styles.navbar__dropdown}>
					<span className={styles.navbar__link}>Social</span>
					<div className={styles.navbar__dropdownContent}>
						<a
							href="https://www.linkedin.com/in/charles-catto-72a230330/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/CharlesCatto/CharlesCatto"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
