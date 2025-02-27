import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import "./App.css";

function App() {
	return (
		<>
			<div className="mainContainer">
				<div className="componentContainer">
					<NavBar />
					<Hero />
					<About id="about" /> {/* Ajout de l'ID "about" */}
					<Projects id="projects" /> {/* Ajout de l'ID "projects" */}
				</div>
				<Footer />
			</div>

			<Background />
		</>
	);
}

export default App;
