import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { listRings, createRing, updateRing } from '../../controller/ring';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', listRings);
app.post('/', createRing);
app.put('/:id', updateRing);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});