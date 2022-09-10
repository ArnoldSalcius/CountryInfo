import {Request, Response, NextFunction} from 'express';
import ninjasApi from '../api/ninjas';
import {randomCountry, findCountry, countryExists} from '../utils/ninjaApi';


const getRandomCountry = async (req: Request, res: Response, next: NextFunction) =>{

    console.log('Request: ' + Math.floor(Math.random() * 1000));
    
    const country = randomCountry();
    console.log(country);
    
    const response = await ninjasApi.get('/country', {
        params: {
            name: country.code
        }
    });
    
    return res.json(response.data[0]);
}


const searchCountryNames = async (req: Request, res: Response, next: NextFunction) => {
    const search = req.query.name;
    
    if(search.length > 2){
        if(typeof search !== 'string'){
            return res.status(500).json({error: 'Invalid search query. (Strings only)'})
        }
        const countries = findCountry(search);

        return res.json({success: true,results: countries.length, data: countries, });
    }else {
        return res.status(400).json({error:'Please provide at least 3 character for name parameter'})
    }
}


const getCountry = async (req: Request, res: Response, next: NextFunction) => {
    
    const countryCode = req.params.countryCode;
    if(countryCode.length !== 2){
        return res.status(400).json({error: 'Country code provided must be of length 2.'})
    }
    if(countryExists(countryCode)){
        try{
            const resp = await ninjasApi.get('/country', {
                params:{
                    name: countryCode
                }
            });
            const countryInfo = resp.data;

            return res.json({success: true, data: countryInfo});

        }catch(e){
            
            return res.json({error: 'Something went wrong retrieving country info'});
        }
    }else{
        return res.status(400).json({error: 'Cannot find this country code on file.'})
    }
    
    
    
};



export {
    getRandomCountry,
    getCountry,
    searchCountryNames
}