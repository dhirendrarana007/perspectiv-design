import React from 'react';
import mobile from '../../assets/mobile.png';
import mission from '../../assets/mission.png';
import { MainHeader } from '../../components/MainHeader';
import { Link } from 'react-router-dom';
// import styles from './VisionAndMission.module.css';

export function VisionAndMission() {

	return (
		<div>
			<MainHeader bgcolor='#d9453d'/>
			<section className="banner inner-page">
				<div className="container-fluid px-0">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12">
							<div className="banner-img-vision">
								<img src={mobile} className="img-fluid" alt="mobile" />
							</div>
						</div>
						<div className="col-lg-7 col-md-6 col-12">
							<div className="banner-img">
								<h2>We have a<br/> clear vision,to<br/> simplify talent<br/> <span className="hire6">sourcing</span></h2>
								<p className="mt-5 text-white">We’re a passionate team of engineers, programmers, thinkers & dreamers who happen to all agree on one thing - traditional recruitment methods suck 😮. There we said it. 74% of employers admit they’ve hired the wrong person for a vacancy. That’s nearly three out of every four employers! We have a clear vision, to simplify talent sourcing and transform the way companies and candidates connect with each other. It all starts with understanding what people are looking for. Once we know that – it’s simply a matter of introducing them to each other. With the right technology and approach, we can ensure that companies have the information they need to make great talent sourcing decisions.</p>
							</div>
						</div>
						<div className="col-12">
							<div className="banner-img mt-5">
								<h2 className="text-center text-white">Need to hire someone?</h2>
								<div className="btn-site text-center mt-5">
									<Link className="btn-shadow" to="/vision-and-mission">Get Started!</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="perfect-employers">
				<div className="container-fluid px-0">
					<div className="row justify-content-end">
						<div className="col-lg-5 col-md-6 col-12">
							<div className="banner-img mission">
								<p><strong>We’re on a mission here</strong></p>
								<h2>To build the best <span className="hire6">talent sourcing</span> solution on earth</h2>
								<p className="mt-5">We created Perspectv for everyone because people are the most valuable asset in any business. The problem is, they’re becoming harder to find, more expensive to hire and difficult to hold onto. When we started mapping out all the barriers and pain points, it became clear that the solution to quick & easy talent sourcing lay in  technology. Afterall, technology when used in the right way, has this magical ability to streamline processes, increase efficiency, improve accuracy and reduce costs regardless of how much you throw at it.</p>
								<p className="my-4"><strong>To build the best talent sourcing solution on earth, we knew we’d need to:</strong></p>
								<p className="m-0">1. Find faster & better ways to connect Job Seekers & Employers</p>
								<p className="m-0">2. Focus more on soft skills and personality traits</p>
								<p className="m-0">3. Take a more holistic view when looking at candidate’s attributes</p>
								<p className="m-0">4. Rely on data to support quicker hiring decisions</p>
								<p className="m-0">5. Overcome and remove bias in the hiring process</p>
								<p className="m-0">6. Come up with an affordable, transparent, results oriented billing structure</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="banner-img-employe text-right">
								<img src={mission} className="img-fluid" alt="mission" />
							</div>
						</div>
						<div className="col-12">
							<div className="banner-img mt-5 pt-5 pb-5">
								<h2 className="text-center text-white">Looking for a great job?</h2>
								<div className="btn-site text-center mt-5">
									<Link className="btn-shadow" to="/vision-and-mission">Get Started!</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mobile-section ggggg">
				<div className="container-fluid px-0">
					<div className="col-12">
						<div className="banner-img reasons p-0">
							<div className="container">
								<h2 className="text-white text-center">We’re doing something <br/>incredible</h2>
								<div className="row justify-content-center">
									<div className="col-12">
										<div className="text-section text-center">
											<p className="m-0 text-white">We know that the road to success for many businesses is full of hardships and challenges but it’s the people that we hire and trust who move the needle. Staying true to what we believe has helped us create a company we’re extremely proud of. In the short time since our launch, we’ve connected hundreds of thousands of Jobs Seekers and Employers. Knowing that we’ve impacted so many people’s lives gets us going. </p>
										</div>
									</div>
								</div>
								<h4>The best part is we’re only getting started. </h4>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
