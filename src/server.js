import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import syncDB from '../database/util/sync';
import router from './router';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.use(express.static(path.resolve(__dirname, process.env.CLIENT_PATH)));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, process.env.CLIENT_INDEX_PATH));
});

syncDB();

export default app;
