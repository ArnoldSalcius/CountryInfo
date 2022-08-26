import {Request, Response, NextFunction} from 'express';
import ninjasApi from '../api/ninjas';
import {RandomCountry} from '../utils/ninjaApi';


const getRandomCountry = async (req: Request, res: Response, next: NextFunction) =>{


    

}


const getCountry = async (req: Request, res: Response, next: NextFunction) => {
    const country = req.query.country;
    if(req.query.country){
        const country = req.query.country;
        

    }else{
        const country = RandomCountry();
        const response = await ninjasApi.get('/country', {
            params: {
                name: country.code
            }
        });
        
    
        return res.json(response.data);
    }
    
};



export {
    getRandomCountry,
    getCountry
}