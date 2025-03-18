import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { listRings } from '../../controller/ring';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', listRings);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});