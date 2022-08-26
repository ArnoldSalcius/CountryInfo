
import express from 'express';
const router = express.Router();
import {getRandomCountry, getCountry} from '../controllers/ninjaController';



router.get('/country', getCountry);



export default router;

