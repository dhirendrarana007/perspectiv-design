import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import twitter_003 from "../assets/images/003-twitter.png";
import youtube_005 from "../assets/images/005-youtube.png";
import linkedin_002 from "../assets/images/002-linkedin.png";
import facebook_app_symbol_004 from "../assets/images/004-facebook-app-symbol.png";
import instagram_001 from "../assets/images/001-instagram.png";
import { NavItem, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

export function MainHeader(props) {
      const [close, setClose] = useState(false);
      const [open, setOpen] = useState({
        'usefullink': false,
        'feature': false,
        'lookingforjob': false,
        'otherlink': false
      });

        return (
            <Navbar style={{'background-color': props.bgcolor}}  collapseOnSelect expand="true" >
              <div className="container">
                <ul className="social-icon-header mx-auto d-md-none d-block">
                  <li>
                    <a href="/" className="m-0 p-4">
                      <img
                        src={twitter_003}
                        alt="twitter_003"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="m-0 p-4">
                      <img
                        src={youtube_005}
                        alt="youtube_005"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="m-0 p-4">
                      <img
                        src={linkedin_002}
                        alt="linkedin_002"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="m-0 p-4">
                      <img
                        src={facebook_app_symbol_004}
                        alt="facebook_app_symbol_004"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="m-0 p-4">
                      <img
                        src={instagram_001}
                        alt="instagram_001"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
                <div className="navbar-header d-flex justify-content-lg-center justify-content-between w-100 align-items-center">
                  <Navbar.Brand href="/">
                    <img src={logo} alt="logo" /> Perspectv
                  </Navbar.Brand>
                  <span className="ml-auto product_link">
                    <ul className="social-icon-header d-md-block d-none">
                      <li>
                        <a href="https://twitter.com/Perspectv_App" target={"_blank"} className="m-0 p-2">
                          <img
                            src={twitter_003}
                            alt="twitter_003"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCorhDQzZSQvE5-iG9ixmyIA" target={"_blank"} className="m-0 p-2">
                          <img
                            src={youtube_005}
                            alt="youtube_005"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/perspectv-recruitment-limited/" target={"_blank"} className="m-0 p-2">
                          <img
                            src={linkedin_002}
                            alt="linkedin_002"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100078176135720" target={"_blank"} className="m-0 p-2">
                          <img
                            src={facebook_app_symbol_004}
                            alt="facebook_app_symbol_004"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/perspectv.app/" target={"_blank"} className="m-0 p-2">
                          <img
                            src={instagram_001}
                            alt="instagram_001"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                    </ul>
                  </span>
                  <Navbar.Toggle
                    aria-controls="collapsibleNavbar"
                  />
                   
                  <Navbar.Collapse id="collapsibleNavbar" className="d-block">
                        <div className="sidebar_logo mb-5">
                          <div className="d-flex justify-content-between p-4">
                            <Navbar.Brand href="/">
                                <img src={logo} alt="logo" /> Perspectv
                              </Navbar.Brand> 
                              <Navbar.Toggle
                                aria-controls="collapsibleNavbar"
                              > 
                                <button type="button" className="close" aria-label="Close" onClick={() => setClose(!close)}>
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </Navbar.Toggle>
                          </div>
                        </div>
                        <Nav className="ml-5" navbarScroll>
                          <div className="menu_bar_right">
                          <h4
                              onClick={() => setOpen({...open, 'usefullink': !open.usefullink})}
                              aria-controls="useful-link-text"
                            >
                              Useful Links
                            </h4>
                            <Collapse in={open.usefullink}>
                              <div className="pl-5">
                                <NavItem>
                                  <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                                </NavItem>
                                <NavItem>
                                  <Nav.Link eventKey="2" as={Link} to="/our-platform">our platform</Nav.Link>
                                </NavItem>
                                <NavItem>
                                  <Nav.Link eventKey="3" as={Link} to="/vision-and-mission">vision & mission</Nav.Link>
                                </NavItem>
                              </div>  
                            </Collapse>
                          </div>

                          <div className="menu_bar_right">
                            <h4
                              onClick={() => setOpen({...open, 'feature': !open.feature})}
                              aria-controls="feature-text"
                            >
                              Features
                            </h4>
                            <Collapse in={open.feature}>
                              <div className="pl-5">
                                <NavItem>
                                  <Nav.Link eventKey="4" as={Link} to="/job-seeker">JobSeeker</Nav.Link>
                                </NavItem>
                                <NavItem>
                                  <Nav.Link eventKey="5" as={Link} to="/job-poster">JobPoster</Nav.Link>
                                </NavItem>
                              </div>  
                            </Collapse>
                          </div>

                          <div className="menu_bar_right">
                            <h4
                              onClick={() => setOpen({...open, 'lookingforjob': !open.lookingforjob})}
                              aria-controls="looking-for-job"
                            >
                              Looking For a Job ?
                            </h4>
                            <Collapse in={open.lookingforjob}>
                              <div className="pl-5">
                                <NavItem>
                                  <Nav.Link eventKey="6" as={Link} to="/career">Career</Nav.Link>
                                </NavItem>
                              </div>  
                            </Collapse>
                          </div>

                          <div className="menu_bar_right">
                            <h4
                              onClick={() => setOpen({...open, 'otherlink': !open.otherlink})}
                              aria-controls="otherlink"
                            >
                              Other Links
                            </h4>
                            <Collapse in={open.otherlink}>
                              <div className="pl-5">
                                <NavItem>
                                  <Nav.Link eventKey="7" as={Link} to="/terms-and-conditions">TermsAndConditions</Nav.Link>
                                </NavItem>
                                <NavItem>
                                  <Nav.Link eventKey="8" as={Link} to="/privacy-policy">PrivacyPolicy</Nav.Link>
                                </NavItem>
                              </div>  
                            </Collapse>
                          </div>
                         
                          <div className="menu_bar_right">
                            <h4>
                            <Link eventKey="9" to="/">launch app</Link>
                            </h4>
                          </div>
                         
                        </Nav>
                  </Navbar.Collapse>
                </div>
              </div>
            </Navbar>
          );
    
}
