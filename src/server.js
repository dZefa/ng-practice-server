import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = Express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
