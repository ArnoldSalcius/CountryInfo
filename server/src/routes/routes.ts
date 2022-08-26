
import express from 'express';
const router = express.Router();
import {getRandomCountry, getCountry, searchCountryNames} from '../controllers/ninjaController';



router.get('/country', getRandomCountry);
router.get('/country/search', searchCountryNames)
router.get('/country/:countryCode', getCountry);




export default router;

