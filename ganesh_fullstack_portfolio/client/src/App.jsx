export default function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h1 className="logo">Ganesh</h1>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">

          <h2>Hello, I'm</h2>

          <h1>Palla Ganesh</h1>

          <h3>
            Machine Learning Developer & AIML Student
          </h3>

          <p>
            Passionate Artificial Intelligence and Machine Learning undergraduate
            with experience in building real-world machine learning applications
            using Python, Scikit-learn, Streamlit, and Next.js.
          </p>

          <button className="hero-btn">
            View Projects
          </button>

        </div>
      </section>

      <section id="about" className="section">

        <h2>About Me</h2>

        <p>
          I am currently pursuing B.Tech in Artificial Intelligence and
          Machine Learning at GITAM University, Bangalore.
        </p>

        <p>
          I enjoy solving real-world problems using machine learning
          algorithms and modern web technologies.
        </p>

      </section>

      <section id="skills" className="section">

        <h2>Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python</p>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>
              Regression, Classification,
              Random Forest, Model Evaluation
            </p>
          </div>

          <div className="skill-card">
            <h3>Libraries</h3>
            <p>
              Pandas, NumPy,
              Scikit-learn, Streamlit
            </p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>
              Git, GitHub,
              Jupyter Notebook, Next.js
            </p>
          </div>

        </div>

      </section>

      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Personalized Diet Recommendation System</h3>

            <p>
              Built a Random Forest model using 16,000+ records.
              Improved prediction accuracy using feature engineering.
            </p>
          </div>

          <div className="project-card">
            <h3>Loan Approval Prediction System</h3>

            <p>
              Developed a machine learning classification model
              with preprocessing and validation techniques.
            </p>
          </div>

          <div className="project-card">
            <h3>Smart Diet Calorie Predictor</h3>

            <p>
              Designed a regression model for calorie estimation
              and built an interactive Streamlit-based UI.
            </p>
          </div>

        </div>

      </section>

      <section id="contact" className="section contact-section">

        <h2>Contact</h2>

        <p>Email: pallaganesh305@gmail.com</p>

        <p>Phone: 7671928579</p>

        <p>Location: Bangalore, India</p>

      </section>

      <footer>
        <p>
          © 2026 Palla Ganesh Portfolio
        </p>
      </footer>

    </div>
  )
}