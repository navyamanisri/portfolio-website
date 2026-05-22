import { educationList, certifications } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

function formatEducationDetails(entry) {
  const parts = [];

  if (entry.field) {
    parts.push(entry.field);
  }

  parts.push(`${entry.scoreLabel}: ${entry.score}`);

  if (entry.year) {
    parts.push(entry.year);
  }

  return parts.join(" | ");
}

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
          subtitle="Academic record from undergraduate studies through school."
        />

        <ul className="education__list">
          {educationList.map((entry) => (
            <li
              key={entry.id}
              className={`education__item ${entry.primary ? "education__item--primary" : ""}`}
            >
              <h3 className="education__headline">
                <span className="education__level">{entry.level}</span>
                <span className="education__school">{entry.institution}</span>
              </h3>
              <p className="education__details">
                {formatEducationDetails(entry)}
              </p>
            </li>
          ))}
        </ul>

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
