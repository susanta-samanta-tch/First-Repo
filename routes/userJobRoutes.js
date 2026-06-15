import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getAllJobProfile, setJobApplication, getAppliedJobs,
    getPendingInterviews
 } from '../controllers/userJobController.js';
const userJobRoutes = express.Router();


// Job section routes
userJobRoutes.get('/get-all-job-profile', userAuth, getAllJobProfile);
userJobRoutes.post('/set-job-application', userAuth, setJobApplication);
userJobRoutes.get('/get-applied-jobs', userAuth, getAppliedJobs);
userJobRoutes.get('/get-pending-interviews', userAuth, getPendingInterviews); // give all job application in which isInterviewStart is false 

export default userJobRoutes;



