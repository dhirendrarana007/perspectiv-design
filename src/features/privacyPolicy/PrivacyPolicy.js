import React
  // , { useState } 
  from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectCount,
// } from './homeSlice';
import { MainHeader } from '../../components/MainHeader';
// import styles from './Home.module.css';

export function PrivacyPolicy() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
       <MainHeader bgcolor='#bb4563'/>

      <section className="tarms-page inner-page">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <div className="banner-img mt-5">
                <h2 className="text-center text-white">Privacy policy</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terms-data">
        <div className="container">
          <h4>Introduction</h4>
          <p>We are committed to safeguarding the privacy of our users; in this policy, we outline how your personal information is collected, used, shared, and the steps we take to protect your information.<br />
            When you register online with us, you agree that we may handle your information in accordance with this Privacy Policy. You may revoke your consent to this policy. To revoke your consent, please contact us. If you revoke your consent, your account and user profile will be removed from our database.</p>
          <h4>Collecting personal information</h4>
          <p>We collect information about you when you use our website and application. We receive and store this information when you enter it on our website, send it to us, or provide it to us in any other way.<br />
            We may collect, store and use the following kinds of personal information:<br />
            • Information about your computer and about your visits to and use of this website including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths.<br />Information you provide to us when registering online, including your name, address, telephone number and email address. Your resume and employment experience, job title, billing information and your race, ethnicity, or gender, if you choose to provide it.<br />• Information about your business, such as company name, size, and business type.<br />• Referrals: If while using our service, you choose to share website content with a friend, we will ask you for your friend's contact information. We will automatically send your friend an email inviting him or her to visit the website. <br />You can access, correct or remove this information by accessing your account settings. If you do not have an account, or if you believe that someone else has provided us with your contact information, please email us at hello@perspectv.app. </p>
          <h4>Information we collect about you when you use our products</h4>
          <p>We gather information automatically whenever people visit our site or use our web application. This information includes:<br />
            • Your activity on Perspectv, viewing and applying for jobs <br />
            • Your internet protocol (IP) address and internet service provider (ISP)<br />
            • Your browser type and device ID<br />
            • The pages you visit on our site <br />This data is collected automatically. We use this data along with your personal details to help determine which jobs will suit you best. The collected data may also be used for further development and improvement of our website and web application, to adapt and improve our content and services.</p>
          <h4>How we use your information</h4>
          <p>Personal information submitted to us through our website and web application will be used for the purposes specified in this policy. By registering with Perspectv, you consent to us using your information in relation to:<br />
            • Customer registration and administration<br />
            • Our products and services <br />
            • Prevention and detection of crime<br />• Marketing & Remarketing<br />• Monitoring<br />• Communicating with you<br />
            • Analysing, improving and optimising our services and products<br />• Job searches and applications<br />• Your location<br />We will not, without your express consent, share your personal information with any third parties. </p>
          <h4>Disclosing personal information</h4>
          <p>We may disclose your personal information to our employees, agents or suppliers insofar as reasonably necessary for the purposes set out in this policy.<br />We may disclose your personal information to any member of our group of companies (this means our subsidiaries, our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for the purposes set out in this policy.<br /> While we take strict measures to safeguard your information from unauthorised access or inappropriate use, Perspectv has no control over any of the prospective employers and third parties we share your information with and are not responsible for how they use your information.
            We will not share contact information with third parties for their direct marketing purposes. <br />We share your information with companies or third parties who help us deliver our products and services to you. Examples of these services include web hosting services, data analysis, marketing assistance, providing customer management tools, processing credit card payments, and providing customer service. These companies will have access to your personal information to perform their functions, however they may not use that data for any other purpose.<br />By applying to a job, providing your contact information to show interest in a job, or by replying to a message from an employer, you consent to the disclosure of your information to that employer and to be contacted by such employer for employment related purposes.</p>
          <h4>Cookies</h4>
          <p>We may ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit our website. Cookies are small units of data temporarily stored on the hard disk of your computer by your browser that are necessary for using our website. The information contained in cookies is designed to enable us to improve our website experience. It is recommended that you leave on all the cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
          <h4>Google Analytics </h4>
          <p>We measure visitors to our websites and products using Google Analytics. This service records what pages you view within our site, how you arrived at our site and some basic information about your computer. The information we collect helps us understand what parts of our sites are doing well, how people arrive at our site and so on. Like most websites, we use this information to make our website better. Ny using our website and products, you agree to us collecting and using this information to improve our services. </p>
          <h4>Facebook</h4>
          <p>We use the Facebook pixel to measure the performance of our Facebook adverts.</p>
          <h4>Security of personal information</h4>
          <p>We respect Data Protection Legislation and follow strict security procedures in the storage and disclosure of information that you have given to us. We take all reasonable care to prevent any unauthorised disclosure of your data.<br />While we take reasonable measures to keep your information secure, we cannot guarantee your online data security. We are not liable to you for any loss of data, injury or harm which occurs to you as a result of the transmission of your information over the Internet, unless this occurs as a result of our negligence or wilful misconduct.<br />Password and username. You are responsible for safeguarding your username, password and any other information we provide to you in connection with your account and our services.</p>
          <h4>Data Retention</h4>
          <p>Your career will continue to develop, and we want to be a part of that journey too. To ensure that we’re able to continue supporting you, we retain all the information we gather about you. This information allows us to better understand what career opportunities might suit you best in the future.<br />We may retain your information for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.<br />If you are located in the European Union and you do not sign into your account or interact with our services for more than five years, your account will expire and be scheduled for removal from our database. <br />If you wish to delete your account information altogether, please email us on hello@persepctv.app. We will send you an email to confirm that your personal information has been deleted. We may retain your personal data even after you have closed your account if reasonably necessary to comply with our legal obligations.</p>
          <h4>Amendments</h4>
          <p>We may update this policy from time to time by publishing a new version on our website. You should check this page occasionally to ensure you are happy with any changes to this policy.</p>
          <h4>Your Rights</h4>
          <p>At any time, you may, of course, ask for the deletion of your data. You are also entitled at any time to revoke your consent to the use or processing of your person-related data with future effect.</p>
          <h4>Contact</h4>
          <p>Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to hello@persepctv.app.</p>
        </div>
      </section>
    </>
  );
}
