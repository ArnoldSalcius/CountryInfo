
import express from 'express';
const router = express.Router();
import {getRandomCountry, getCountry, searchCountryNames} from '../controllers/ninjaController';



router.get('/', getRandomCountry);
router.get('/search', searchCountryNames)
router.get('/:countryCode', getCountry);





export default router;