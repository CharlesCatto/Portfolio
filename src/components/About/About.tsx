import styles from "./About.module.css";
import mySkills from "../../assets/skills/avatarPics/allSkills.png";
import avatarIcon from "../../assets/avatarIcon.png";

// Ajoutez une interface pour les props
interface AboutProps {
	id: string;
}

function About({ id }: AboutProps) {
	return (
		<section className={styles.about} id={id}>
			<h2 className={styles.sectionHeading}>About Me</h2>
			<div className={styles.aboutContent}>
				<div className={styles.profile}>
					<img
						src={avatarIcon}
						alt="Charles Catto"
						className={styles.profileImage}
					/>
					<p className={styles.profileDescription}>
						Fully committed to the philosophy of life-long learning, I’m a full
						stack developer with a deep passion for JavaScript, React, and all
						things web development. The unique combination of creativity, logic,
						technology, and never running out of new things to discover drives
						my excitement and passion for web development. When I’m not at my
						computer, I like to spend my time reading, keeping fit, and playing
						guitar.
					</p>
				</div>
				<div id="skills">
					<div className={styles.skills}>
						<img
							src={mySkills}
							alt="My Skills"
							className={styles.skillsImage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
