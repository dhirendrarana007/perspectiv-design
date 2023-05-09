import { configureStore } from '@reduxjs/toolkit';
import ourPlatformReducer from '../features/ourPlatform/ourPlatformSlice';
import jobPosterReducer from '../features/jobPoster/jobPosterSlice';
import jobSeekerReducer from '../features/jobSeeker/jobSeekerSlice';
import visionAndMissionReducer from '../features/visionAndMission/visionAndMissionSlice';
import termsAndConditionsReducer from '../features/termsAndConditions/termsAndConditionsSlice';

export const store = configureStore({
  reducer: {
    ourPlatform: ourPlatformReducer,
    jobPoster: jobPosterReducer,
    jobSeeker: jobSeekerReducer,
    visionAndMission: visionAndMissionReducer,
    termsAndConditions: termsAndConditionsReducer
  },
});
