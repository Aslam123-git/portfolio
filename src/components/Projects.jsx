const projects = [
  {
    title: "Amazon Clone",
    description:
      "A responsive e-commerce frontend inspired by Amazon, built with HTML and CSS.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "http://github.com/Aslam123-git/Amazone-clone",
    live: "YOUR_LIVE_LINK",
  },

  {
    title: "Tic Tac Toe",
    description:
      "An interactive two-player Tic Tac Toe game with game logic and winner detection.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Aslam123-git/Tic-Toc-Toe-Game",
    live: "YOUR_LIVE_LINK",
  },

  {
    title: "Rock Paper Scissors",
    description:
      "An interactive browser game built with JavaScript featuring dynamic gameplay and score tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "http://github.com/Aslam123-git/Rock-Paper-Scissors",
    live: "YOUR_LIVE_LINK",
  },

  {
    title: "To-Do List",
    description:
      "A simple task management application that allows users to add, manage and remove tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "http://github.com/Aslam123-git/To-Do-List",
    live: "YOUR_LIVE_LINK",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <p>My Recent Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <div className="project-image">
              <span>Project Preview</span>
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;

