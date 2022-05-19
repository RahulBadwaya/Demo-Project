
function Blog() {
    return (
      <>
        <section >
      <div className="container-fluid">
        <div className="row">
          <div className="blog-img-container" data-aos="fade-up" data-aos-delay="">
            <div className="img-box">
              <img src="images/story1.jpg" />
            </div>
            <div className="txtCntnr" data-aos="fade-up" data-aos-delay="200">
              <div className="firstStory">
                <h2>DO NOT WAIT TO</h2>
                <h3>Get Motivated</h3>
                <div className="moreButton">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-img-container" data-aos="fade-up" data-aos-delay="">
            <div className="img-box">
              <img src="images/story2.jpg" />
            </div>
            <div className="txtCntnr" data-aos="fade-up" data-aos-delay="200">
              <div className="SecondStory">
                <h2>HARD DAYS WON'T WIN.</h2>
                <div className="moreButton">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-img-container" data-aos="fade-up" data-aos-delay="">
            <div className="img-box">
              <img src="images/story4.jpg" />
            </div>
            <div className="txtCntnr" data-aos="fade-up" data-aos-delay="200">
              <div className="thirdStory">
                <h2>LAUGH.SMILE. LOVE.</h2>
                <h3>FOCUS ON YOUR PURPOSE.</h3>
                <div className="moreButton pt-2">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-img-container" data-aos="fade-up" data-aos-delay="">
            <div className="img-box">
              <img src="images/story3.jpg" />
            </div>
            <div className="txtCntnr" data-aos="fade-up" data-aos-delay="200">
              <div className="forthStory p-5">
                <h2>LET'S DO WHAT WE </h2>
                <h3>LOVE </h3>
                <div className="moreButton">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="newsLtrSection" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h2 className="footer-heading mb-4">GET IN TOUCH AND STAY UPDATED WITH OUR NEWS AND EVENTS</h2>
          </div>
          <div className="col-md-6 col-xs-12">
            <form action="#" method="post" className="footer-subscribe">
              <div className="input-group">
                <input type="text" className="form-control border-secondary text-white bg-transparent" aria-label="Enter Email" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-primary text-black" type="button" id="button-addon2">SUBSCRIBE</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      </>
    );
  }
  
  export default Blog;
  