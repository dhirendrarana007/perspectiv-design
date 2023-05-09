import { NavLink } from "react-router-dom";
import Group_92 from "../assets/landscape-logo-white.png";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import ScrollToTop from "react-scroll-to-top";

export function Footer(){
    return (<section className="footer">
    <div className="container">
      <div className="footer-data text-left">
        <div className="row">
          <div className="col-lg-5 col-l2">
            <div className="footer-logo">
              <NavLink to="/" className="text-white">
                <img src={Group_92} alt="Group_92" className="logo_cstm_width" /> 
              </NavLink>
            </div>
          </div>
          <div className="col-lg-7 col-12 text-left">
            <div className="footer-menu">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="footer-menu">
                    <p>
                      <strong>Useful Links</strong>
                    </p>
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/our-platform">OurPlatform</NavLink>
                      </li>
                      <li>
                        <NavLink to="/vision-and-mission">VisionAndMission</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="footer-menu">
                    <p>
                      <strong>Features</strong>
                    </p>
                    <ul>                  
                      <li>
                        <NavLink to="/job-seeker">JobSeeker</NavLink>
                      </li>
                      <li>
                        <NavLink to="/job-poster">JobPoster</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="footer-menu">
                    <p>
                      <strong>Looking For a Job ?</strong>
                    </p>
                    <ul>
                      <li>
                        <NavLink to="/career">Career</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                  <div className="footer-menu">
                    <p>
                      <strong>Other Links</strong>
                    </p>
                    <ul>
                      <li>
                        <NavLink to="/terms-and-conditions">TermsAndConditions</NavLink>
                      </li>
                      <li>
                        <NavLink to="/privacy-policy">PrivacyPolicy</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="footer-menu text-right mt-5">
                    <ul className="social-icon-header">
                      <li>
                        <NavLink to="/" className="m-0 p-2">
                          <img src={one} alt="one" className="img-fluid" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="m-0 p-2">
                          <img src={two} alt="two" className="img-fluid" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="m-0 p-2">
                          <img
                            src={three}
                            alt="three"
                            className="img-fluid"
                          />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="m-0 p-2">
                          <img
                            src={four}
                            alt="four"
                            className="img-fluid"
                          />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="m-0 p-2">
                          <img
                            src={five}
                            alt="five"
                            className="img-fluid"
                          />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollToTop smooth style={{'z-index': "9999999"}}/>
  </section>);
}