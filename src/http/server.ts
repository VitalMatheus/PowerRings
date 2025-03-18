import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { listRings, createRings } from '../../controller/ring';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', listRings);
app.post('/', createRings);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});