import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Hi, I'm Navya Mani Sri 👋</h1>

        <h2>AI & Full Stack Developer</h2>

        <p>
          Computer Science Engineering student specializing in AI & ML with
          strong interest in modern web development, intelligent applications,
          and problem-solving. Passionate about building responsive and
          AI-powered digital experiences.
        </p>

        <button>View Projects</button>
      </div>

      <div className="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science and Engineering undergraduate at R.V.R. & J.C.
          College of Engineering with specialization in Artificial Intelligence
          and Machine Learning.
        </p>

        <p>
          I enjoy building responsive frontend applications, exploring AI-based
          systems, and learning modern technologies like React.js, Next.js, and
          Tailwind CSS.
        </p>

        <p>
          My interests include full stack development, intelligent applications,
          problem-solving, and creating impactful user experiences through
          technology.
        </p>
      </div>
    </>
  );
}

export default App;
