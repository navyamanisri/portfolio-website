import { personalInfo, leadership } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const highlights = [
  "B.Tech CSE (AI & ML) — CGPA 9.4",
  "Full stack & AI-focused project builder",
  "React, Next.js, and modern CSS workflows",
  "Strong interest in fair AI and practical products",
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeader
          label="About"
          title={
            <>
              Developer focused on <span>AI</span> &amp; full stack craft
            </>
          }
          subtitle="A concise overview for recruiters and collaborators."
        />

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm <strong>{personalInfo.fullName}</strong>, an{" "}
              {personalInfo.role.toLowerCase()} and {personalInfo.degree}{" "}
              student at {personalInfo.college}.
            </p>
            <p>
              I enjoy translating ideas into polished interfaces — from
              AI-powered interview tools to research-driven NLP systems and
              production-style web apps.
            </p>
            <p>
              I'm open to internships, research collaborations, and roles where
              I can grow while delivering reliable, user-centered software.
            </p>
          </div>

          <div className="about__side">
            <ul className="about__highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="about__leadership">
              <h3>Leadership &amp; Activities</h3>
              <ul>
                {leadership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
