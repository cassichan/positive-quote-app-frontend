import "../Styles/TopNav.css";

export default function TopNav() {
  return (
    <header>
      <nav id="nav">
          <img
            id="logo-image"
            src="https://cdn.pixabay.com/photo/2017/11/22/09/03/girl-flying-on-book-2970038_1280.jpg"
            alt="A girl sitting on a giant book with the sun in background."
          ></img>
          <p id="header-text">
            <i>Sharing good, one quote at a time</i> 💛
          </p>
        <section id="social-container">
          <a
            href="https://github.com/cassichan"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-img"
              src="GitHub-Mark-32px.png"
              alt="Github logo: the silhouette of a white cat outline with a tentactle-shaped tail inside of a black circle."
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/cassandra-l-curcio/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-img"
              src="LI-In-Bug.png"
              alt="Linkedin logo: 'in' in white text inside of a rounded light-royal-blue square."
            ></img>
          </a>
        </section>
      </nav>
    </header>
  );
}
