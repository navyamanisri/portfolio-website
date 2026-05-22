import { skills } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeader
          label="Skills"
          title={
            <>
              Tools I <span>use</span>
            </>
          }
          subtitle="Core technologies behind my projects and coursework."
        />

        <div className="skills__grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skills__card">
              <span className="skills__category">{skill.category}</span>
              <h3 className="skills__name">{skill.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
