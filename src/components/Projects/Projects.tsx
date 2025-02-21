import styles from "./Projects.module.css";
import projectsData from "./projects.json";

// Importez les images
import quizProject from "../../assets/ProjectsPics/quizProject.png";
import maVille from "../../assets/ProjectsPics/maVille.png";
import project3 from "../../assets/ProjectsPics/Project3.png";
import project4 from "../../assets/ProjectsPics/Project4.png";
import project5 from "../../assets/ProjectsPics/Project5.png";

// Associez les images aux projets
const projectImages = {
	1: quizProject,
	2: maVille,
	3: project3,
	4: project4,
	5: project5,
};

function Projects() {
	return (
		<section className={styles.projects} id="projects">
			<h2 className={styles.sectionHeading}>My Projects</h2>
			{projectsData.map((project, index) => (
				<div
					key={project.id}
					className={`${styles.project} ${
						index % 2 === 0 ? styles.left : styles.right
					}`}
				>
					<a
						href={project.projectExample}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={projectImages[project.id]} // Utilisez l'image importée
							alt={project.name}
							className={styles.projectImage}
						/>
					</a>
					<div className={styles.projectDetails}>
						<h3 className={styles.projectTitle}>{project.name}</h3>
						<p className={styles.projectDescription}>{project.description}</p>
					</div>
				</div>
			))}
		</section>
	);
}

export default Projects;
