
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
          <div className="image-container">
            <img
              src="/imgs/cv_pic.jpg"
              alt="Steven Profile"
              className="shadow-dark"
            />
            </div>
            <h1>Steven Asamoah Ayensu</h1>
            <p>Software Developer</p>
            <div className="social-links">
              <a href="https://github.com/Estavao/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/zazutopazz" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/stephen-ayensu" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
