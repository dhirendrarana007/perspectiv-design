import React from 'react';
import { Routes, Route } from "react-router-dom";
import { OurPlatform } from './features/ourPlatform/OurPlatform';
import { VisionAndMission } from './features/visionAndMission/VisionAndMission';
import { JobSeeker } from './features/jobSeeker/JobSeeker';
import { JobPoster } from './features/jobPoster/JobPoster';
import { TermsAndConditions } from './features/termsAndConditions/TermsAndConditions';
import { PrivacyPolicy } from './features/privacyPolicy/PrivacyPolicy';
import { Home } from './features/home/Home';
import { Career } from './features/career/Career';
import { CareerDetails } from './features/Career-details/Career-details';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/our-platform" element={<OurPlatform />} />
      <Route path="/job-seeker" element={<JobSeeker />} />
      <Route path="/job-poster" element={<JobPoster />} />
      <Route path="/career" element={<Career />} />
      <Route path="/career-details/:id" element={<CareerDetails />} />
      <Route path="/vision-and-mission" element={<VisionAndMission />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
