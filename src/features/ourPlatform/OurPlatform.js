import React
// , { useState }
from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectCount,
// } from './homeSlice';
import bannerLeft from '../../assets/banner-left.png';
import perfect from '../../assets/perfect.png';
import mobile from '../../assets/mobile.png';
import download1 from '../../assets/download1.png';
import download3 from '../../assets/download3.png';
import { MainHeader } from '../../components/MainHeader';
import { Link } from 'react-router-dom';
// import styles from './Home.module.css';

export function OurPlatform() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
     <MainHeader bgcolor='#d9453d'/>

      <section className="banner py-5">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 cstm_padding">
              <div className="banner-img-page">
                <img src={bannerLeft} className="img-fluid" alt="banner-left" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="banner-img">
                <p><strong>we’re modernising candidate sourcing</strong></p>
                <h2 class="cstm-mrgn">AI Matching <br /><span className="text-white hire6">Technology</span></h2>
                <p className="text-white mt-5">If you’re sick and tired of making bad hiring decisions, then Perspectv is the solution for you. Our powerful AI talent matching algorithm cross references thousands of data points including skills, experience, interests, location and personality traits to identify, rank and match Job  Seekers with suitable employment opportunities. Using technology, we’re able to produce better search results and get the right people talking to each other faster. </p>
                <div className="btn-site mt-5">
                  <Link className="btn-shadow" to="/vision-and-mission">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="perfect-employers pb-0">
        <div className="container-fluid px-0">
          <div className="row justify-content-end">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="banner-img">
                <p><strong>Why 1,000’s of Companies prefer perspectv</strong></p>
                <h2 class="cstm-mrgn">Perfect For<br/><span className="hire6">Employers</span></h2>
                <p className="mt-5">With Perspectv, we’re creating immense value for companies. Looking <br/>for a single placement or wanting to build a pipeline? Tired of sifting <br/>through hundreds of CV’s? No problem! We’ve got it sorted… Our <br/>powerful talent matching app is guaranteed to make your life easier.<br/> Simply define what you are looking for and we’ll connect you directly to<br/> job seekers who have the skills, experience and personality traits you<br/> need! </p>
                <div className="btn-site mt-5">
                    <Link className="btn-shadow" to="/vision-and-mission">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img-employers">
                <img src={perfect} className="img-fluid" alt="perfect" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img-employer text-center">
                <img src={mobile} className="img-fluid" alt="mobile" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner-img col-padd">
                <h2 className="text-white">Easy FOR <br /><span className="hire6">JOB SEEKERS</span></h2>
                <p className="text-white mt-5">We’re empowering job seekers by giving them the opportunity to find their ideal job quickly and easily. When you register, you’ll get instant access to thousands of jobs. There's no more searching for jobs or painful applications, our advanced matching algorithms will find  suitable jobs for you and connect you directly to the hiring managers of those roles. All you need to decide is which ones to go for.  </p>
                <div className="btn-site mt-5">
                 <Link className="btn-shadow" to="/vision-and-mission">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
            <div className="banner-img reasons">
              <div className="container">
                <div className="img-chidiya">
                  <img src={download1} className="img-fluid" alt="download1" />
                </div>
                <div className="img-chidiya2">
                  <img src={download3} className="img-fluid" alt="download3" />
                </div>  
                  <h2 className="text-white text-center">10x reasons to try <br/>perspectv now</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-12 col-12">
                      <div className="text-section">
                        <p className="m-0 text-white">1. It can be accessed on any device, no plugins or installs req.</p>
                        <p className="m-0 text-white">2. Free to sign up & easy to get started</p>
                        <p className="m-0 text-white">3. It’s faster, easier & cheaper than using a job board or recruiter</p>
                        <p className="m-0 text-white">4. We use a sophisticated matching engine to connect candidates with employers</p>
                        <p className="m-0 text-white">5. It’s easy to monitor & track the roles and candidates you’re interested in </p>
                        <p className="m-0 text-white">6. Unlimited connections</p>
                        <p className="m-0 text-white">7. No hefty recruitment fees, just a simple low “Pay as you go” fixed fee structure</p>
                        <p className="m-0 text-white">8. Roles can remain open for continuous marketing</p>
                        <p className="m-0 text-white">9. Up to 10X more effective than outdated recruitment methods</p>
                        <p className="m-0 text-white">10.No upfront costs, long-term commitments or nonsense</p>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-white text-center"><span className="hire">Let’s</span> go!</h2>
                  <div className="btn-site text-center mt-5">
                    <Link className="btn-shadow" to="/vision-and-mission">Sign up Free!</Link>
                  </div>
                    
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
