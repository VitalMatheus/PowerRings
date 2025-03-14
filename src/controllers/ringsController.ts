import { Request, Response } from 'express';
import Ring from '../database/models/Ring';

export const listRings = async (req: Request, res: Response) => {
  try {
    const rings = await Ring.findAll();
    res.status(201).json(rings);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os anéis.' });
  }
};
