import express, { Request, Response } from 'express';
import cors from 'cors';

import { listRings } from '../controllers/ringsController';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/rings', listRings);

app.get('/', (req: Request, res: Response) => {
    res.send('API dos Anéis do Poder está funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});