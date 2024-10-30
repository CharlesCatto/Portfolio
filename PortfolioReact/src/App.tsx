import "./App.css";
// import Card from "./components/Card";

import Card from "./components/Card";
import skills from "./data/skills.json";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h2 id="topPage">??</h2>

      <NavBar />
      <About />
      <section>
        <h2>Project</h2>
      </section>
      <main className="container">
        {skills.map((skill) => (
          <Card
            name={skill.name}
            projectExample={skill.projectExample}
            avatar={skill.avatar}
            description={skill.description}
            key={skill.id}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
