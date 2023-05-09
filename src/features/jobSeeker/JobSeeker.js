import React
from 'react';
import box11 from '../../assets/box11.png';
import box22 from '../../assets/box22.png';
import box33 from '../../assets/box33.png';
import box44 from '../../assets/box44.png';
import box55 from '../../assets/box55.png';
import box66 from '../../assets/box66.png';
import box77 from '../../assets/box77.png';
import box88 from '../../assets/box88.png';
import JobSeeker1 from '../../assets/images/Job-Seeker-1.png';
import JobSeeker5 from '../../assets/images/Job-Seeker-5.png';
import JobSeeker6 from '../../assets/images/Job-Seeker-6.png';
import mission from '../../assets/mission.png';
import mobile from '../../assets/images/mobile.png';
import image from '../../assets/images/image.png';
import { MainHeader } from '../../components/MainHeader';
import { Link } from 'react-router-dom';
// import styles from './JobSeeker.module.css';

export function JobSeeker() {

  return (
    <>
      <MainHeader bgcolor='#5644e0'/>

      <section className="banner job_seeker">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="banner-img-page job-seeker">
                <img src={mobile} className="w-100" alt="banner-left" />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="banner-img px-0 pt-5">
                <p><strong className="text-white">Stop wasting time applying for random jobs online</strong></p>
                <h2><span className="text-white">Find your perfect</span><br/> job <span className="hire_small">10x</span> faster</h2>
                <p className="text-white mt-5">What kind of role are you looking for? </p>
                <div className="job-seeker-btn mt-3">
                  <Link to="#" className="red btn">FULL TIME</Link>
                  <Link to="#" className="yellow btn">PART TIME</Link>
                  <Link to="#" className="gray btn">REMOTE</Link>
                </div>
                <p className="text-white mt-5">Why waste hours searching the internet for jobs that match your skills, experience & personality traits<br/> when our powerful algorithm can do it for you in seconds. It’s like having your own dedicated personal<br/> recruitment consultant. </p>
                <div class="btn-site mt-5"><a class="btn-shadow" href="/">Launch app</a></div> 
              </div>
            </div>
          </div>
          <div className="super-jobs">
              <div className="row justify-content-end">
                <div className="col-lg-7 col-md-6 col-12">
                  <div className="banner-img home-seeker mt-5 pl-md-5 pl-0">
                    <h2 className="">Connect<span className="hire6"> directly</span> <br/><span className="text-white">to the UK’s top<br/> hiring managers</span></h2>
                    <p className="text-white mt-5">Register online and get instant access to thousands of jobs and some of the UK’s top hiring<br/> managers. There's no more searching for jobs or painful applications, our advanced algorithms will<br/> find suitable jobs for you and connect you directly to the hiring managers of those roles. <br/>All you need to decide is which ones to go for. </p>
                    <div className="btn-site mt-5"><a className="btn-shadow" href="/">Sign up free</a></div>
                  </div>
                </div>  
                <div className="col-lg-5 col-md-6 col-12">
                  <div className="banner-img-employe-seeker text-right">
                    <img src={mission} className="img-fluid" alt="banner-left" />
                  </div>
                </div>  
              </div>
          </div>
        </div>
      </section>
      
      <section className="perfect-employers-seeker pb-0">
        <div className="exe">
          <img src={image} className="img-fluid" alt="banner-left" />
        </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="banner-img">
                  <h2><span className="hire6">8 reason</span><span className="text-white">to try perspectv now</span> </h2>
                  <div className="btn-site mt-5">
                    {/* <a className="btn-shadow" href="/vision-and-mission">Learn More</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="reasonto">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box11} className="img-fluid" alt="banner-left" />
                      <p>01<span className="text-muted">/08</span></p>
                    </div>
                    <h5>Free to sign up & easy to get started</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box22} className="img-fluid" alt="banner-left" />
                      <p>02<span className="text-muted">/08</span></p>
                    </div>
                    <h5>Personalised search results, we find great roles for you</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box33} className="img-fluid" alt="banner-left" />
                      <p>03<span className="text-muted">/08</span></p>
                    </div>
                    <h5>Our two-way algorithm is constantly introducing your profile to employers</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box44} className="img-fluid" alt="banner-left" />
                      <p>04<span className="text-muted">/08</span></p>
                    </div>
                    <h5>Quicker & easier than using a job board or recruiter </h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box55} className="img-fluid" alt="banner-left" />
                      <p>05<span className="text-muted">/08</span></p>
                    </div>
                    <h5>No middlemen, we connect you directly to hiring managers</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box66} className="img-fluid" alt="banner-left" />
                      <p>06<span className="text-muted">/08</span></p>
                    </div>
                    <h5>Up to 10X more effective than outdated recruitment methods</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box77} className="img-fluid" alt="banner-left" />
                      <p>07<span className="text-muted">/08</span></p>
                    </div>
                    <h5>A simple click of the button lets employers know you’re interested</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reasonto-box">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={box88} className="img-fluid" alt="banner-left" />
                      <p>08<span className="text-muted">/08</span></p>
                    </div>
                    <h5>No upfront costs or obligations so you have nothing to lose</h5>
                  </div>
                </div>
                <div className="col-12">
                  <div className="reasonto-box text-center my-5">
                    <a className="btn-shadow" href="/vision-and-mission">Try it now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="how_it_work">
              <div className="banner-img">
                <h2><span className="text-white">How it</span> <span className="hire6">works</span></h2>
                <p className="text-white text-center mb-0"> A Step-by-Step Guide to Getting Hired FAST All you need to decide is which ones to go for. </p>
              </div> 
              <div className="step-step">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div class="box-page-section btn-shadow seeker_box_page px-4 py-5">
                      <img src={JobSeeker1} className="img-fluid" alt="Job-Seeker-1" />
                      <h3>SIGN UP ONLINE</h3>
                      <p>Looking to find a great job fast.<br/> Register online, it’s quick, easy and <br/>free. Give it a try.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div class="box-page-section btn-shadow seeker_box_page rto px-4 py-5">
                      <img src={JobSeeker5} className="img-fluid" alt="Job-Seeker-1" />
                      <h3>CREATE YOUR PROFILE</h3>
                      <p>Complete your online profile. Tell us<br/> what you’re looking for and Perspectv <br/>will generate personalised job<br/> matches for you.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div class="box-page-section btn-shadow seeker_box_page px-4 py-5">
                      <img src={JobSeeker6} className="img-fluid" alt="Job-Seeker-1" />
                      <h3>FIND A JOB THAT FITS</h3>
                      <p>Every time you login, we’ll show you an<br/> updated list of opportunities that suit <br/>your profile & preferences. All you need<br/> to do is decide which ones you’re <br/>interested in, and we’ll connect you.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div class="free">
                      <p>Sign up now to access thousands <br/>of great jobs. It’s 100% free to join</p>
                      <div className="btn-site mt-5"><a className="btn-shadow" href="/">Sign up free</a></div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
      </section>

      <section className="mobile-section banner-img testimonial_section pb-0">
      <div className="lots_page"> 
        <div className="container">
          <h4>“ TESTIMONIAL ”</h4>
          <h2 className="text-center">The #1 app <span className="text-white">for<br/> uk job seekers </span></h2>
       
          <div className="row mt-md-5 mt-0 pt-5">
            <div className="col-lg-10 col-12">
              <div className="testimomial-box">
              <svg width="1437" height="373" viewBox="0 0 1437 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25697 371.947L76.3334 32.4715L1435.66 1.03136L1343.21 316.59L1.25697 371.947Z" stroke="white" stroke-width="2"/>
              </svg>
              <div className="box_svg">
                  <p className="text-white">I love the convenience of Perspectv. I spent months applying for jobs online and never got anywhere. Now <br/>the jobs come to me, I don’t even have to search for them. Knowing that I am already considered a good <br/>match before applying has given me so much confidence. It’s awesome.   </p>
                  <div className="d-flex align-items-center">
                    <div className="round_boxtestimonial">
                    </div>
                    <p className="mb-0"><strong className="text-white">JULES, LONDON</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-10 col-12">
              <div className="testimomial-box">
              <svg width="1317" height="322" viewBox="0 0 1317 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.8464 320.965L1.18992 54.0836L1274.13 1.03631L1315.84 268.373L49.8464 320.965Z" stroke="white" stroke-width="2"/>
                </svg>
              <div className="box_svg">
                  <p className="text-white">I love the convenience of Perspectv. I spent months applying for jobs online and never got anywhere. Now <br/>the jobs come to me, I don’t even have to search for them. Knowing that I am already considered a good <br/>match before applying has given me so much confidence. It’s awesome.   </p>
                  <div className="d-flex align-items-center">
                    <div className="round_boxtestimonial">
                    </div>
                    <p className="mb-0"><strong className="text-white">JULES, LONDON</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-12">
              <div className="testimomial-box">
              <svg width="1359" height="341" viewBox="0 0 1359 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.08486 339.943L23.4283 51.4827L1302.69 1.0327L1357.79 270.38L1.08486 339.943Z" stroke="white" stroke-width="2"/>
              </svg>

                <div className="box_svg">
                  <p className="text-white">I love the convenience of Perspectv. I spent months applying for jobs online and never got anywhere. Now <br/>the jobs come to me, I don’t even have to search for them. Knowing that I am already considered a good <br/>match before applying has given me so much confidence. It’s awesome.   </p>
                  <div className="d-flex align-items-center">
                    <div className="round_boxtestimonial">
                    </div>
                    <p className="mb-0"><strong className="text-white">JULES, LONDON</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="banner-img mt-5 pt-5">
              <h2 class="text-white text-center">
              <span class="hire">Let’s</span> go!</h2>
              <div class="btn-site text-center mt-5">
                <a class="btn-shadow" href="/vision-and-mission">Sign up Free!</a>
              </div>
          </div>
         
        </div>
      </div>  
      </section>
    </>
  );
}
