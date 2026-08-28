import profileImage from "../assets/image.png";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Muhammad <span>Aslam</span>
        </h1>

        <h2>
          Frontend Developer
        </h2>

        <p className="home-description">
          I build responsive and user-friendly web
          applications using modern web technologies.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>

        </div>

      </div>

      <div className="home-image">

        <img src={profileImage} alt="Muhammad Aslam" />

      </div>

    </section>
  );
}

export default Home;