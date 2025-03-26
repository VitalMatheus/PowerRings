import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { listRings, createRing, updateRing, deleteRing } from '@controllers/ring';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', listRings);
app.post('/', createRing);
app.put('/:id', updateRing);
app.delete('/:id', deleteRing)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});