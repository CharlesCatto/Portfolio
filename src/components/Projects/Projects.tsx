import styles from "./Projects.module.css";
import projectsData from "./projects.json";

// Importation des images
import pickYourCostume from "./ProjectsPictures/PickYourCostume.png";
import roadAddict from "./ProjectsPictures/Road-Addict.png";
import travelUp from "./ProjectsPictures/TravelUp.png";
import karotaine from "./ProjectsPictures/Karotaine.png";
import sandrasMarket from "./ProjectsPictures/SandrasMarket.png";
import cocktailFinder from "./ProjectsPictures/CocktailFinder.png";

// Associez les images aux projets
const projectImages: { [key: number]: string } = {
	1: pickYourCostume,
	2: roadAddict,
	3: travelUp,
	4: karotaine,
	5: sandrasMarket,
	6: cocktailFinder,
};

interface ProjectsProps {
	id: string;
}

function Projects({ id }: ProjectsProps) {
	return (
		<section className={styles.projects} id={id}>
			<h2 className={styles.sectionHeading}>My Projects</h2>
			{projectsData.map((project, index) => (
				<div
					key={project.id}
					id={`project-${project.id}`}
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
							src={projectImages[project.id]}
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
