function Story() {
  return (
    <>
      <section className="event-section withBack">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className=" event-big-image">
                <div className="event-title" data-aos="fade-up">
                  <h3 className="section-sub-title mb-4">
                    IF CONTENT IS KING, <br />
                    THEN WHO IS QUEEN?
                  </h3>
                </div>
                <div className="event-img mb-4" data-aos="fade-up" data-aos-delay="">
                  <span className="pstTime">2 days ago | 15min read</span>
                </div>
                <div
                  className="scsnText ml-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="mb-4">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ab labore molestiae aliquid atque eligendi ducimus
                      suscipit, doloremque, perspiciatis quisquam excepturi
                      recusandae placeat animi ad officia deleniti, repellendus
                      reiciendis praesentium? Veritatis perferendis maxime
                      deserunt iste velit, excepturi totam nobis id tempora.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ab labore molestiae aliquid atque eligendi ducimus
                      suscipit, doloremque, perspiciatis quisquam excepturi
                      recusandae placeat
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="sesnLink">
                      <a href="#">Continue reading </a>
                    </div>
                  </div>
                </div>
                <div className="moreView">
                  <a href="">MORE ARTICLES</a>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="vdoArtclHead" data-aos="fade-up">
                <h2>FRESH CLIP!</h2>
              </div>
              <div className="vdoArtcl" data-aos="fade-up">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                  labore molestiae aliquid atque eligendi
                </p>
                <span className="pstTime">YouTube 0:34</span>
                <div className="video">
                  <figure className="circle-bg mt-3">
                    <img
                      src="images/video-1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>

              <div className="moreView">
                <a href="">MORE VIDEOS</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
