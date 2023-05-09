import React from 'react';
import bannerLeft from '../../assets/banner-left.png';
import perfect from '../../assets/perfect.png';
import mobile_phonbe from '../../assets/mobile_phonbe.png';
import recruitment from '../../assets/recruitment-needs.png'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import Steenkamp from '../../assets/Steenkamp.png';
import { MainHeader } from '../../components/MainHeader';
import { Link } from 'react-router-dom';
// import styles from './JobPoster.module.css';

export function JobPoster() {

  return (
    <>
     <MainHeader bgcolor='#d9453d'/>

      <section className="banner new_padding job_poster_banner">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="banner-img-page">
                <img src={bannerLeft} className="img-fluid" alt="banner-left" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="banner-img">
                <p><strong>THE BEST WAY TO FIND & CONNECT WITH GREAT TALENT</strong></p>
                <h2>Stop searching, <br />Start <span className="text-white hire6">matching</span> :)</h2>
                <p className="text-white mt-5">Perspectv is an online Talent Matching App for connecting Job Seekers & Employers. <strong className="text-white">Think Tinder but for jobs!</strong> </p>
                <p className="text-white mt-5">There's no more sifting through hundreds of CV’s. Simply define what you’re looking for and our smart algorithms will screen and find matching candidates for you. Boom!</p>
                <div className="btn-site mt-5">
                  <Link className="btn-shadow btn_arrow" to="/vision-and-mission">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dirrect_access">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="banner-img">
                  <h2> <spna className="text-white"> Get direct access</spna> <br />to thousands of<br /><span className="hire6">candidates </span> </h2>
              </div>
              <div class="row">
                 <div className="col-lg-4 col-md-4 col-12 side_image"> 
                    <img src={mobile_phonbe} alt="phone"></img>
                 </div>
                 <div className="col-lg-8 col-md-8 col-12"> 
                  
                 </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <div className="banner-img mt-4">
                <ul>
                    <li>Free, easy sign up</li>
                    <li>No searching, we find, screen & rank the candidates for you</li>
                    <li>The process is quicker & easier than using a job board or recruiter</li>
                    <li>No middlemen, we connect you directly to the candidates</li>
                    <li>Up to 10x cheaper and faster than using a recruiter</li>
                    <li>No upfront costs, long-term commitments or nonsense, just great results</li>
                </ul>
              </div>
              <div className="btn-site mt-5">
                <Link className="btn-shadow " to="/vision-and-mission">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="perfect-employers pb-0">
        <div className="container px-0">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img">
                <h2><span className="text-white">Hi, my name is </span><br/> Mike Steenkamp</h2>
                <p className="mt-5">I’m the CEO of Perspectv. We created Perspectv to make it easier for Job Seekers & Employers to discover, connect and communicate with each other.</p>
                <p className="mt-5">What we’re doing is so important. We’re flipping the job market on its head. Traditional recruitment methods suck, they’re outdated, ineffective
                          & expensive. This is a global problem costing companies and economies billions each year. Using technology, we’ve reimagined, redesigned and  modernised a part of the recruitment industry which hasn’t evolved in
                         decades</p>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-12">
              <div className="steenkamp_img">
                <img src={Steenkamp} className="img-fluid" alt="perfect" />
              </div>
            </div>
          </div>
        </div>
      </section>
     <section className="recruitment"> 
        <div className="container">
        <div className="row ">
            <div className="banner-img text-center">
                <h2><span className="text-white ">Traditional recruitment </span><br/> methods are  <span className="hire6">failing</span></h2>
            </div>
           <div className="margin-bottom"></div>
           <div className="col-lg-1 col-md-1 col-12"></div>
           <div className="col-lg-5 col-md-5 col-12">
                <div className="row"> 
                    <div className="col-lg-5 col-md-5 col-12"> 
                      <h3>43%</h3>
                    </div>
                    <div className="col-lg-7 col-md-7 col-12"> 
                      <p className="mt-5 text-white">of job seekers quit within the first 3 months </p>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-lg-5 col-md-5 col-12"> 
                        <h3>26%</h3>
                    </div>
                    <div className="col-lg-7 col-md-7 col-12"> 
                    <p className="mt-5 text-white">of employees are unproductive and disengaged </p>
                    </div>
                </div>
           </div>
            
           <div className="col-lg-5 col-md-5 col-12">
              <div className="row"> 
                  <div className="col-lg-5 col-md-5 col-12"> 
                    <h3>45%</h3>
                  </div>
                  <div className="col-lg-7 col-md-7 col-12"> 
                  <p className="mt-5 text-white">of workers are actively looking for a new job </p>
                  </div>
              </div>
              <div className="row"> 
                  <div className="col-lg-5 col-md-5 col-12"> 
                    <h3>80%</h3>
                  </div>
                  <div className="col-lg-7 col-md-7 col-12"> 
                  <p className="mt-5 text-white">of employee turnover is due to bad hiring decisions</p>
                  </div>
              </div>
           </div>
           <div className="col-lg-1 col-md-1 col-12"></div>
          </div>
        </div>
     </section>
     <section className="knowing ">
        <div className="container px-0">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img">
                <div className="absolute_box">
                <p><span className="text-white">By knowing what to look for, </span> perspectv is able to solve all of these problems.</p>
                </div>
                <h2><span className="text-white">The ultimate solution to solve all your </span> <br/><span className="hire6"> recruitment needs</span></h2>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-12">
              <div className="recruitment_img">
                <img src={recruitment} className="img-fluid" alt="recruitment" />
              </div>
            </div>
          </div>
          <div className="row"><h3 className="cx mt-5">7 reasons to try perspectv now</h3> </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">01</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>It’s quick, easy and <br/><span style={{color:"#1c37dd"}}>FREE</span> to join Perspectv</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box ">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">02</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>You can look for<br/> single jobs or run <br/>multiple placements<br/> at the same time</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">03</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>You can keep roles open<br/> for continuous marketing<br/> building a solid <br/>pipeline of talent</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">04</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>You only pay £35 for <br/>every candidate you want <br/>to connect with</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">05</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>No upfront commitment, <br/>no long-term contracts,<br/> no nonsense</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">06</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>Our Talent Matching<br/> App does all the work<br/> for you</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-3 col-md-3 col-12">
                        <h3 className="circle_number">07</h3>
                      </div>
                      <div className="col-lg-9 col-md-9 col-12">
                        <p><strong>We make it easy for you <br/>to track & communicate <br/>with the applicants</strong></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 nth-child-7">
              <div className="content_box">
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 nth-child-8 ">
              <div className="content_box">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-12">
                        <div class="btn-site mt-5">
                          <a class="btn-shadow " href="/vision-and-mission">Sign up free</a>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end driven"> 
            <div className="col-lg-8 col-md-8 col-12"> 
            <h2>A.I. Driven <br/> Talent matching </h2>
            <p><span>What we’re doing has never been done before</span></p>
            </div>
            <div className="col-lg-3 col-md-3 col-12"> 
              <p>Save time, energy and money focusing on the right candidates. It’s like putting your recruitment search on “cruise control”. Simply define what you’re looking for and our powerful matching
                technology will identify ideal matches and produce ranked results, all within seconds. All you need to do is decide who you want to connect with and meet.</p>
            </div>
          </div>
          <div className="row driven_btn">
          <div className="col-lg-12 col-md-12 col-12">
          <div class="btn-site mt-5"><a class="btn-shadow " href="/vision-and-mission">Launch app</a></div>
             </div>
          </div>
        </div>
      </section>
      <section className="works ">
        <div className="container px-0">
          <div className="row justify-content-end">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="banner-img head_text">
                <h2><span className="text-white text-center">How it works</span></h2>
                <p><span>No commitment. No hassle. No BS.</span></p>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="banner-img box_text">
              <img src={one} className="img-fluid" alt="one" />
              <h3>Easy to join</h3>
              <p>Looking to find and connect with great talent. Register online, it’s quick, easy and free. Give it a try.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="banner-img box_text middle_box">
              <img src={two} className="img-fluid" alt="two" />
              <h3>Create your profile</h3>
              <p>Complete your online profile. Tell us what you’re looking for and Perspectv will generate personalised matches for you.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="banner-img box_text">
              <img src={three} className="img-fluid" alt="three" />
              <h3>Get connecting</h3>
              <p>Every time you login, we’ll show you an updated list of candidates who suit your job description & preferences. All you need to do is decide which ones you’re intereste</p>
              </div>
            </div>
          </div>
          </div>
      </section>
      <section className="perfect-employers job_poster_employe">
        <div className="container-fluid px-0">
        <div className="row absolute_box_two" >
            <div className="col-lg-3 col-md-6 col-12">
              <div className="cstm_box_two">
                <h4 class="cstm-mrgn"><span className="text-white ">Fixed Fee of <br></br><span className="big-white " >£35</span> <br></br>for every candidate you want to meet.</span></h4>
              </div>
            </div>
           
          </div>
        <div className="row center_text" >
        <div className="col-lg-1 col-md-1 col-12"></div>
            <div className="col-lg-10 col-md-10 col-12">
              <div className="banner-img">
                <h2 class="cstm-mrgn"><span className="text-white ">Stop everything else you’re <br/>doing & </span>pay attention to <br/>this section because it is <br/>hugely  <span className="hire6">important!</span></h2>
              </div>
            </div>
           <div className="col-lg-1 col-md-1 col-12"></div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-6 col-12 align-self-end">
              <div className="banner-img jion-data">
                <p className="mt-0 join"><strong>Join thosands of businesses already using perspectv</strong></p>
                <p className="mt-5">Our powerful talent matching App is the fastest, easiest & cheapest way to find and hire great candidates. </p>
                <p className="mt-3"><strong>Stop wasting time & money searching for candidates.</strong></p>
                <div className="mb-5 pb-5">
                  <p className="mt-3">Sign up now and let us find them for you. It’s 100% free to join.</p>
                </div>
                <div className="btn-site mt-5">
                    <Link className="btn-shadow mt-5" to="/vision-and-mission">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="banner-img-employers">
                <img src={perfect} className="img-fluid" alt="perfect" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-section job_poster_last">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img-employer">
                  <div className="testimonial_box"> 
                        <div className="testimonial_content"> 
                          <p className="">Sifting through hundreds of CVs is a real hack. We often narrow it down quickly and then just pick someone even though we know it isn’t a great hire. Big mistake! We
                            turned to Perspectv for help and it’s been a game changer. We no longer hunt for candidates, they come to us, plus we now have a list of candidates to choose from that we know are suitable and it doesn’t cost us a fortune.
                          <br />- We can’t lose.</p>
                          <div className="row"> 
                              <div className="col-lg-5 col-md-5 col-12"></div>
                              <div className="col-lg-7 col-md-7 col-12">
                                  <h5>James Dodson</h5>
                                  <h6>Business Services <br /> Signed up January 2022</h6>
                              </div>
                          </div>
                        </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img">
                <h3 className="yellow_text">" TESTIMONIAL "</h3>
                <h2 className="text-white">The smart new
                  way to hire but
                  don’t take our
                  word for it</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid right-people px-0">
          <div className="col-12 px-0">
            <div className="banner-img reasons">
              <div className="container">
                <h2 className="text-white text-center">With the right people,<br/> <span className="yellow_text"> anything is possible</span>  </h2>
                <h2 className="text-white text-center mt30"><span className="hire">Let’s</span> go!</h2>
                <div className="btn-site text-center mt-5">
                  <Link className="btn-shadow" to="/vision-and-mission">Sign up Free!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
