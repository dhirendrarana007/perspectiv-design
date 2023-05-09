import React, { useEffect, useState } from "react";
import MaskGroup from "../../assets/images/Mask-Group.png";
import PerspectvWebsitek_03 from "../../assets/images/Perspectv-Websitek_03.png";
import Vector_5 from "../../assets/images/Vector-5.png";
import Group_100 from "../../assets/images/Group-100.png";
import generic from "../../assets/images/generic.png";
import Ellipse_63 from "../../assets/images/Ellipse-63.png";
import Group_882 from "../../assets/images/Group-882.png";
// import Ellipse_64 from '../../assets/images/Ellipse-64.png';
import Group_98 from "../../assets/images/Group-98.png";

import Group_108_03 from "../../assets/images/Group-108_03.png";
import PerspectvWebsitek_003 from '../../assets/images/Perspectv-Websitek_003.png';
import { MainHeader } from "../../components/MainHeader";
import { Footer } from "../../components/Footer";
import { Link,  } from "react-router-dom";
// import { Header } from '../../components/Header';
// import styles from './JobPoster.module.css';

export function Home() {
  const [activeScroll, setActiveScroll] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  function setScroll(){
    if(window.scrollY >= 0 && window.scrollY < 2000){
      setActiveScroll(1);
    }
    if(window.scrollY >= 2000 && window.scrollY < 3600){
      setActiveScroll(2);
    }

    if(window.scrollY >= 3600 && window.scrollY < 5000){
      setActiveScroll(3);
    }

    if(window.scrollY >= 5000 && window.scrollY < 7000){
      setActiveScroll(4);
    }

    if(window.scrollY >= 7000){
      setActiveScroll(5);
    }
    console.log(window.scrollY);
  }
  return (
    <>
      {/* <Header /> */}

      <MainHeader bgcolor='#d9453d'/>
      <section className="banner-home inner-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-12">
              <div className="banner-img home mt-5">
                <p className="text-white">Welcome!</p>
                <h2 className="">
                  <span className="text-white">The smart <br/>new way </span>
                  <br />
                  to <span className="hire">hire</span>  and get<span className="hire2">hired.</span>
                </h2>
              </div>
            </div>
          </div>

        </div>
        <div className="container-fluid">
          <div className="banner-img-2">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 col-12">

              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="banner-img mr-5 text-right d-md-none d-block">
                    <p style={{ color: "#000" }}>
                      Discover how we use AI to shape the future of recruitment
                      and turn problems into possibilities.
                    </p>
                    <div className="btn-site arrow_size mt-5">
                      <Link className="btn-shadow" to="/">
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="banner-img-employerso">
                    <img src={MaskGroup} alt="MaskGroup" className="img-fluid" />
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="banner-img mr-0 mr-xl-5 text-right d-md-block d-none">
                  <p style={{ color: "#000" }}>
                    Discover how we use AI to shape the future of recruitment
                    and turn problems into possibilities.
                  </p>
                  <div className="btn-site arrow_size mt-5">
                    <Link className="btn-shadow" to="/">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-img-3">
          <div className="container">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="banner-img part-2 mt-md-5 mt-0 pb-0">
                  <p className="text-white">It's not easy to find a great professional</p>
                  <h2 className="">
                    It takes a tremendous
                    <br /> <span className="text-white">amount of time</span>,
                    energy and money to find & hire good <span className="hire2">people.</span>
                  </h2>
                  
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-md-block d-none">
                <div className="img-part-3">
                  <img
                    src={PerspectvWebsitek_03}
                    alt="PerspectvWebsitek_03"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12 align-self-end d-md-block d-none">
                <div className="banner-img text-right">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-flex d-block justify-content-between mx-md-5 px-5">
            <div className="mt-5 align-self-end">
              <h5>
                <Link to="/">
                  <strong>See more</strong><i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </h5>
            </div>
            <div className="banner-img text-right">
              <p style={{ color: "#000" }} className="m-0">
                Discover how we use AI to shape <br />
                the future of recruitment and <br />
                turn problems into possibilities.
              </p>
              <div className="btn-site mt-5">
                <Link className="btn-shadow" to="/">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="term-data">
        <div className="img-part-3 d-md-none d-block">
                  <img
                    src={PerspectvWebsitek_003}
                    alt="PerspectvWebsitek_03"
                    className="img-fluid"
                  />
        </div>
        <img src={Vector_5} alt="Vector_5" className="img-fluid" />
        <div className="term-data-section">
          <div className="container">
            <div className="d-md-flex d-block justify-content-around">
              <div className="banner-img part-2 align-self-center">
                <p>Spend a lot of time and money!</p>
                <h2 className="mt-4">
                  Companies<br /> have
                  never <br />hired as
                  <br /> much as they <br />
                  do today.
                </h2>
              </div>
              <div className="round-box">
                <div className="round-1">
                  <p>They’ve never spent as much money doing it.</p>
                </div>
                <div className="round-2">
                  <p>They’ve never done a worse job of it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-flex d-block justify-content-between mx-md-5 mx-0 wq">
            <div className="mt-5 align-self-end">
              <h5>
                <Link to="/">
                  <strong>See more</strong><i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </h5>
            </div>
            <div className="banner-img text-right">
              <p style={{ color: "#000" }} className="m-0">
                Discover how we use AI to shape <br />
                the future of recruitment and <br />
                turn problems into possibilities.
              </p>
              <div className="btn-site mt-5">
                <Link className="btn-shadow" to="/">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="full-img">
              <img src={Group_100} alt="Group_100" className="img-fluid" />
            </div>
            <div className="row">
              <div className="col-lg-10 col-md-12 col-12">
                <div className="banner-img part-2 mb-0">
                  <p className="mt-0">High values and full job boards</p>
                  <h2 className="">
                    The problem is that recruitment agencies charge up to{" "}
                    <span className="text-white hire">25%</span><span className="ex"> (sometimes more)</span>and
                    job boards are full of rubbish.
                  </h2>
                </div>
              </div>
            </div>
            <div className="d-md-flex d-block justify-content-between">
              <div className="mt-md-5 mt-3 align-self-end">
                <h5>
                  <Link to="/">
                    <strong>See more</strong><i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </h5>
              </div>
              <div className="banner-img text-right">
                <p style={{ color: "#000" }} className="m-0">
                  Discover how we use AI to shape <br />
                  the future of recruitment and <br />
                  turn problems into possibilities.
                </p>
                <div className="btn-site mt-5">
                  <Link className="btn-shadow" to="/">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-we">
        <div className="container-fluid px-0">
          <div className="row justify-content-end">
            <div className="col-xl-6 col-lg-8 col-12">
              <div className="created">
                <div className="d-md-flex d-block align-items-center justify-content-center">
                  <img src={generic} alt="generic" className="img-fluid" />
                  <div className="banner-img part-2 we-create">
                    <h2 className="ml-0">
                      That's <br />
                      why we
                      <br /> created
                    </h2>
                    <p class="fxd">
                      A "real alternative" to recruitment app<br/> where job seekers
                      and Hiring managers<br/> can connect directly with each other.<br/>
                      A “real alternative” to recruitment agencies<br/> and boards,
                      which are very frustrating and <br/>expensive to deal with
                      with.
                    </p>
                    <p className="mt-3 fxd">
                      Our unique data driven recruitment<br/> app is quick to setup,
                      easy to use and <br/>produces amazing results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12"></div>
          </div>
          <div className="banner-img part-2 we-created">
            <h2 style={{ color: "#ffd578" }}>
              it will <br />
              revolutionise
              <br /> <span className="hire3">hiring in the
              <br /> future.</span>
            </h2>
            <div className="d-md-flex d-block justify-content-between">
              <div className="mt-5 align-self-end">
                <h5>
                  <Link to="/">
                    <strong>See more</strong><i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </h5>
              </div>
              <div className="banner-img text-right">
                <p style={{ color: "#000" }} className="m-0">
                  Discover how we use AI to shape <br />
                  the future of recruitment and <br />
                  turn problems into possibilities
                </p>
                <div className="btn-site mt-5">
                  <Link className="btn-shadow" to="/">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="buy_section">
            <div className="img-rounded">
              <img src={Ellipse_63} alt="Ellipse_63" className="img-fluid" />
            </div>
            <div className="hello">
              <div className="row justify-content-end no-gutters">
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="dicover">
                    <div className="banner-img part-2 we-create">
                      <h2 className="text-white ml-0">
                        Bye, bye frustration... <br />
                        <span style={{ color: "#ffd578" }}><span className="hire4">
                          hello<br/>
                          Perspectv</span>
                        </span>
                      </h2>
                      <h6 className="text-white">
                        Looking for the
                        perfect <br /> candidate
                        or job role?  <br />No
                        problem.
                      </h6>
                      <p className="p-0 text-white">
                        Simply define what you’re looking for and<br/> Perspectv will
                        find it for you. Our powerful<br/> algorithm, uses thousands
                        of matching markers<br/> to identify suitable matches! <br />
                        <br />
                        There’s no more sifting through hundreds of CV’s,<br/> no
                        more middlemen and no more recruitment<br/> fees. Just fast,
                        accurate results!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="dicover">
                    <img
                      src={Group_882}
                      alt="Group_882"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buy_section">
            <div className="hello">
              <div className="row justify-content-start">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="dicover">
                    {/* <img src={Ellipse_64} alt="Ellipse_64" className="img-fluid" /> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="dicover">
                    <div className="banner-img part-2 we-create">
                      {/* <h2 className="text-white">Bye, bye frustration... <br /><span style={{ color: "#ffd578" }}>hello <br />Perspectv</span></h2>
                      <h6 className="text-white">Looking for the<br /> perfect candidate<br /> or job role? No <br />problem.</h6>
                      <p className="p-0 text-white">Simply define what you’re looking for and Perspectv will find it for you. Our powerful algorithm, uses thousands of matching markers to identify suitable matches! <br /><br />There’s no more sifting through hundreds of CV’s, no more middlemen and no more recruitment fees. Just fast, accurate results!</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-last">
        <div className="container-fluid px-0">
          <div className="last-section">
            <div className="row justify-content-center align-items-center no-gutters">
                   <div className="col-lg-3 col-md-3 col-12">   </div>
              <div className="col-lg-9 col-md-9 col-12">
                <div className="dicover">
                  <div className="banner-img part-2 we-create">
                    <h2 className="">
                      We see the
                      <br /> world differently,
                      <br /> it’s time you
                      <br /> did too.
                    </h2>
                    <p className="p-0">
                      We’ve combined modern recruitment methodologies and <br />
                      emerging technology to create the most intuitive and
                      efficient
                      <br /> data driven recruitment solution in the world.
                    </p>
                    <h5 className="hire5">
                      When traditional recruitment is no longer <br />
                      effective, it’s time for a different Perspectv.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 offset-md-8 align-self-end">
                <div className="">
                  <div className="banner-img text-right">
                    <p style={{ color: "#000" }} className="m-0">
                      Discover how we use AI to shape <br />
                      the future of recruitment and <br />
                      turn problems into possibilities
                    </p>
                    <div className="btn-site mt-5">
                      <Link className="btn-shadow" to="/">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-md-flex d-block justify-content-between dex">
        <div className="">
          <h5>
            <Link to="/">
              <strong>See more</strong><i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </h5>
        </div>
      </div>

      <section className="formula">
        <div className="container">
          <div className="banner-img part-2 we-create">
            <h2 className="text-center text-white mb-5">
              The perfect 
              <br /><span class="hire6">formula.</span> 
            </h2>
            <img
              src={Group_108_03}
              alt="Group_108_03"
              className="img-fluid mx-auto d-table"
            />
            <p className="text-center text-white p-0">
              We used technology to solve the speed, price and convenience
              <br /> issue and then added a big data algorithm to get the right
              <br /> candidates talking to the right companies.{" "}
            </p>
            <h5 className="text-center" style={{ color: "#000" }}>
              It’s super quick, super easy and super cool!{" "}
              <span className="display-3">
                <strong>Boom!!!</strong>
              </span>
            </h5>
          </div>
          <div className="row mt-md-5 mt-0 pt-md-5 pt-0">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-page-section btn-shadow p-md-5 p-3">
                <h4>
                  <strong>
                    Companies spend on <br/>avg about 4-5k per<br/> placement.
                  </strong>
                </h4>
                <p>
                  With Perspectv, there are no hefty<br/> recruitment fees. Just a
                  simple, low,<br/> fixed fee of £ 35 for every candidate<br/> they want
                  to meet.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-page-section btn-shadow p-md-5 p-3">
                <h4>
                  <strong>Roles can stay open<br/> for continuous <br/>searching.</strong>
                </h4>
                <p>
                  It’s like putting your recruitment<br/> search on “cruise control”.
                  You’ll build <br/>a solid talent pipeline and never miss<br/> an
                  opportunity.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-page-section btn-shadow p-md-5 p-3">
                <h4>
                  <strong>
                    There’s no more <br/>weeding through<br/> hundreds of CV’s.
                  </strong>
                </h4>
                <p>
                  Perspectv can screen thousands of <br/>candidates, identify ideal
                  matches <br/>and produce ranked results, all within<br/> seconds.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-page-section btn-shadow p-md-5 p-3">
                <h4>
                  <strong>We’ve cut out the<br/> middleman.</strong>
                </h4>
                <p>
                  We’ve created a direct route – <br/>making it quick and easy for<br/>
                  companies and job seekers to find<br/> and connect with each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="formula-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="footer_search">
                <img src={Group_98} alt="Group_98" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="footer_search_part">
                <div className="banner-img part-2 mb-md-5 mb-0">
                  <h2 className="text-center">
                    <span className="text-white"><span className="hire">Let’s</span> go Perspectv!</span>
                  </h2>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control btn-shadow"
                    placeholder="You e-mail"
                  />
                  <div className="input-group-append ml-3">
                    <button className="btn btn-shadow" type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <p className="text-center mt-5 pt-md-5 pt-0">
                  Discover how we use AI to shape the future of <br />
                  recruitment and turn problems into possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section_indicator d-md-block d-none"> 
          <ul> 
            {[1,2,3,4,5,6].map((liindex) => liindex === activeScroll ? <li className="active"></li> : <li></li>)}
          </ul>
      </div>
      <Footer/>
    </>
  );
}