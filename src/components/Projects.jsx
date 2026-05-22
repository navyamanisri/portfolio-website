import { projects } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function ProjectLink({ githubUrl }) {
  const hasLink = Boolean(githubUrl?.trim());

  if (hasLink) {
    return (
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="projects__link projects__link--active"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.2 9.2 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          />
        </svg>
        View on GitHub
      </a>
    );
  }

  return (
    <span
      className="projects__link projects__link--placeholder"
      aria-disabled="true"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.2 9.2 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
      GitHub link coming soon
    </span>
  );
}

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
              <header className="projects__header">
                <span className="projects__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="projects__badge">{project.highlight}</span>
              </header>

              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>

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

                <p className="projects__description">{project.description}</p>
              </div>

              <footer className="projects__footer">
                <ProjectLink githubUrl={project.githubUrl} />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
