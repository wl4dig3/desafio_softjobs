import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));