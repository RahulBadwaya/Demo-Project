
function Contact() {
    return (
      <>
         <section className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="conctForm">
              <form action="#" className=" bg-white">
              
              
              <div className="vdoArtclHead">
                <h2>Get in touch</h2>
              </div>

              <div className="row form-group" data-aos="fade-up">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input type="text" id="" className="form-control" placeholder="First Name"/>
                </div>
                <div className="col-md-6">
                  <input type="text" id="" className="form-control" placeholder="Last Name"/>
                </div>
              </div>

              <div className="row form-group" data-aos="fade-up">
                <div className="col-md-6 mb-3 mb-md-0">
                  <input type="email" id="" className="form-control" placeholder="Email address"/>
                </div>
                <div className="col-md-6">
                  <input type="text" id="" className="form-control" placeholder="Website"/>
                </div>
              </div>

              <div className="row form-group" data-aos="fade-up">                
                <div className="col-md-6">
                  <div className="row mixFild">
                    <div className="col-md-12 form-group">
                      <input type="Number" id="email" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="col-md-12 form-group">
                      <input type="Date" id="date" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6" data-aos="fade-up">
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="message"></textarea>
                </div>
              </div>

              <div className="row form-group" data-aos="fade-up">
                <div className="col-md-12">
                  <input type="submit" value="submit" className="btn btn-primary btn-md text-white"/>
                </div>
              </div>

  
            </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="eventBox" >

              <div className="vdoArtclHead" data-aos="fade-up">
                <h2>Events</h2>
              </div>

              <div className="evntListBox" data-aos="fade-up">
                <h2>April</h2>
                <div className="envtList" data-aos="fade-up">
                  <span className="evntCount">28</span>
                  <div className="evntDtl">
                    <p>Lorem ipsum vero eos et accusamus et iusto...</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <div className="envtList" data-aos="fade-up">
                  <span className="evntCount">28</span>
                  <div className="evntDtl">
                    <p>Lorem ipsum vero eos et accusamus et iusto...</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <div className="envtList" data-aos="fade-up">
                  <span className="evntCount">28</span>
                  <div className="evntDtl">
                    <p>Lorem ipsum vero eos et accusamus et iusto...</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <div className="envtList" data-aos="fade-up">
                  <span className="evntCount">28</span>
                  <div className="evntDtl">
                    <p>Lorem ipsum vero eos et accusamus et iusto...</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <div className="envtList" data-aos="fade-up">
                  <span className="evntCount">28</span>
                  <div className="evntDtl">
                    <p>Lorem ipsum vero eos et accusamus et iusto...</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                
              </div>
              <div className="moreView">
                  <a href="">MORE EVENTS</a>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="site-footer" >
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="border-top ">
              <div className="ftrList">
                <ul>
                  <li>RBD  Production</li>
                  <li>Copyright 2022</li>
                  <li>All Rights Reserved</li>             
                </ul>
              </div>        
            </div>
          </div>
          
        </div>
      </div>
    </footer>
      </>
    );
  }
  
  export default Contact;
  