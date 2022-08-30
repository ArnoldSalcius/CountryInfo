import express from 'express';
import countryRoutes from './countryRoutes';

const router = express.Router();


router.use('/country', countryRoutes);


export default router;

