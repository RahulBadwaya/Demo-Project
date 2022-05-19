
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Podcast from "./components/Podcast";
import Blog from "./components/Blog";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Charity from "./components/Charity";
import Career from "./components/Career";

function App() {
  return (
    <>
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <header
          className="site-navbar py-2 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-xl-2">
                <h1 className="mt-3 nav-logo">
                    <img src="images/logo.png" />
                </h1>
              </div>

              <div className="col-12 col-md-10 d-none d-xl-block">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li>
                      <Link to="/" className="nav-link active">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link to="/podcast" className="nav-link">
                        PODCAST
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="nav-link">
                        BLOG
                      </Link>
                    </li>
                    <li>
                      <Link to="/events" className="nav-link">
                        EVENTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-link">
                        CONTACT
                      </Link>
                    </li>
                    <li>
                      <Link to="/story" className="nav-link">
                        STORY
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        CHARITY
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        CAREERS
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link">
                        {" "}
                        ENGLISH
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3">
                <a href="#" className="site-menu-toggle js-menu-toggle float-right">
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
