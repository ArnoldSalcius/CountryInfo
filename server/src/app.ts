import express from 'express';
import 'dotenv/config';
import router from './routes/routes';


const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const pause = 500;

    setTimeout(() => {
        console.log('Pause of ' + pause + 'ms' + Math.random());
        
        next();
    }, 5000)
})

app.use('/api/v1', router);


app.listen(PORT, () => {
    console.log('server running on Port ' + PORT);
    
})