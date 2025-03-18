import { Request, Response } from 'express';
import { RingData } from '../types/ring';

const Ring = require('../models/ring.js');

export const listRings = async (req: Request, res: Response): Promise<any> => {
  try {
    const rings: RingData = await Ring.findAll();
    return res.status(201).json(rings);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar os anéis.' });
  }
};

export const createRings = async(req: Request, res: Response): Promise<any> => {
  try {
    const { name, power, carrier, forgedBy, image }: RingData = req.body;
    const ringsCount = await Ring.count({ where: { forgedBy } });
    
    let maxRings = 0;
    switch(forgedBy) {
      case 'elfos':
        maxRings = 3;
        break;
      case 'anões':
        maxRings = 7;
        break;
      case 'homens':
        maxRings = 9;
        break;
      case 'sauron':
        maxRings = 1;
        break
      default:
        return res.status(400).json({ error: 'Forjador Inválido' });
      }

      if (ringsCount >= maxRings) {
        return res.status(400).json({ error: `Limite máximo de anéis atingido para ${forgedBy}`})
      }
    
    const newRing = await Ring.create({ name, power, carrier, forgedBy, image });
    
    return res.status(201).json(newRing);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o anel' });
  }
}