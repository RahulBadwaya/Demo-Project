function Home() {
  return (
    <>
      <section
        className="site-blocks-cover overlay home-container"
        data-aos="fade"
        id="home-section" 
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 mt-lg-5 ">
              <h1 className="text-uppercase" data-aos="fade-up">
                  <img src="images/CREATIVITY.svg" />
                <br />
                  <img src="images/MARKETIN.svg" />
                <span>Evoluto.</span>
                <br />
                  <img src="images/CONTEI.svg" />
              </h1>
              <fieldset>
                <div className="home-banner-text">
                  <span>Forbes</span>
                  <span>GLAMOUR</span>
                  <span>VANITY FAIR</span>
                  <span>LA STAMPA</span>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <a href="#about-section" className="mouse smoothscroll">
          <span className="mouse-icon">
            <span className="mouse-wheel"></span>
          </span>
        </a>
      </section>
    </>
  );
}

export default Home;
