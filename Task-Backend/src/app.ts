
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/Routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';


const app: Application = express();

//parser
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'] }));
//application route
app.use('/api/v1', router)



app.get('/', (req: Request, res: Response) => {
    res.send('SERVER OF SBAC BANK is RUNNING.... ')
})
app.use(globalErrorHandler);

//route not found
app.use(notFound);

export default app