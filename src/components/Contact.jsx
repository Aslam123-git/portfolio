function Contact() {
  return (
    <section id="contact" className="section contact">

      <div className="section-heading">

        <p>Let's Connect</p>

        <h2>Contact Me</h2>

      </div>

      <p className="contact-description">
        I'm open to internship opportunities and
        frontend development projects.
      </p>

      <div className="contact-container">

        <a href="mailto:aslamarzu6636@gmail.com">
          <span>Email</span>
          aslamarzu6636@gmail.com
          
        </a>

        <a
          href="https://github.com/Aslam123-git/"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          GitHub Profile
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-aslam-58b453328"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          LinkedIn Profile
        </a>

      </div>

    </section>
  );
}

export default Contact;