import { personalInfo } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";
import SocialLinks from "./SocialLinks";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <SectionHeader
          label="Contact"
          title={
            <>
              Let's <span>connect</span>
            </>
          }
          subtitle="Open to internships, collaborations, and learning opportunities."
        />

        <div className="contact__actions">
          <a
            className="btn btn--primary"
            href={`mailto:${personalInfo.email}`}
          >
            {personalInfo.email}
          </a>
          <SocialLinks className="contact__social" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
