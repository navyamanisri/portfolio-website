import { personalInfo } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>

          <h1 className="hero__title">
            <span className="hero__title-line">{personalInfo.nameLine1}</span>
            <span className="hero__title-line hero__title-line--accent">
              {personalInfo.nameLine2}
            </span>
          </h1>

          <p className="hero__role">{personalInfo.role}</p>

          <p className="hero__tagline">{personalInfo.tagline}</p>

          <p className="hero__description">
            Computer Science Engineering student specializing in AI &amp; ML.
            I build responsive web applications and intelligent systems with a
            focus on clean design, performance, and real-world impact.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </button>
            <a
              className="btn btn--outline"
              href={`mailto:${personalInfo.email}`}
            >
              Contact Me
            </a>
          </div>

          <SocialLinks className="hero__social" />
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src={personalInfo.profileImage}
              alt={`Portrait of ${personalInfo.fullName}`}
              className="hero__image"
            />
          </div>
          <p className="hero__image-caption">
            {personalInfo.degree} · {personalInfo.college}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
