import { projects } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeader
          label="Projects"
          title={
            <>
              Selected <span>work</span>
            </>
          }
          subtitle="Hands-on builds across AI, research, and full stack development."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article key={project.title} className="projects__card">
              <div className="projects__header">
                <span className="projects__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="projects__badge">{project.highlight}</span>
              </div>

              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__description">{project.description}</p>

              <div className="projects__stack">
                <p className="projects__stack-label">Tech Stack</p>
                <ul className="projects__tags">
                  {project.stack.map((tech) => (
                    <li key={tech} className="projects__tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
