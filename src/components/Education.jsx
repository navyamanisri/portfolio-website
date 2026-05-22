import { education, certifications } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <SectionHeader
          label="Education"
          title={
            <>
              Academic <span>background</span>
            </>
          }
          subtitle="Strong fundamentals with a specialization in AI and machine learning."
        />

        <article className="education__card">
          <div className="education__main">
            <h3>{education.degree}</h3>
            <p className="education__institution">{education.institution}</p>
          </div>
          <dl className="education__meta">
            <div>
              <dt>CGPA</dt>
              <dd>{education.cgpa}</dd>
            </div>
            <div>
              <dt>Graduation</dt>
              <dd>{education.graduationYear}</dd>
            </div>
          </dl>
        </article>

        <div className="education__certs" id="certifications">
          <h3 className="education__certs-title">Certifications</h3>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.title} className="cert-list__item">
                <span className="cert-list__issuer">{cert.issuer}</span>
                <p className="cert-list__title">{cert.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
