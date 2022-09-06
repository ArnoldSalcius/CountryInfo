import express from 'express';
import 'dotenv/config';
import router from './routes/routes';


const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.json());


const pause = 500;
app.use((req, res, next) => {
    console.log('Pause of ' + pause + 'ms' + Math.random());

    setTimeout(() => {
        
        next();
    }, pause);
})

app.use('/api/v1', router);


app.listen(PORT, () => {
    console.log('server running on Port ' + PORT);
    
})