const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "Python"
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-heading">

        <p>What I Know</p>

        <h2>My Skills</h2>

      </div>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;