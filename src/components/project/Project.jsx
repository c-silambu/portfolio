import projects from "./projects";
import "./Project.css"

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      {projects.map((p) => (
        <div key={p.id} className="project-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>

          <p>
            {p.tech.map((t, i) => (
              <span key={i}>{t} </span>
            ))}
          </p>

          <a href={p.github} target="_blank">GitHub</a>
          <a href={p.live} target="_blank">Live</a>
        </div>
      ))}
    </section>
  );
}
