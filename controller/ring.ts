import { Request, Response } from 'express';
import { RingData } from '../types/ring';

const Ring = require('../models/ring.js');

const validateRing = async (forgedBy: string) => {
  const forgedData = forgedBy.toLowerCase();

  const validForgers = ['elfos', 'anões', 'homens', 'sauron'];
  if (!validForgers.includes(forgedData)) {
    return { error: 'Forjador Inválido' };
  }

  const ringsCount = await Ring.count({ where: { forgedBy: forgedData } });

  let maxRings = 0;
    switch(forgedData) {
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
        break;
      default:
        return { error: 'Forjador Inválido' };
      }

      if (ringsCount >= maxRings) {
        return { error: `Limite máximo de anéis atingido para ${forgedBy}` }
      }
}

export const listRings = async (req: Request, res: Response): Promise<any> => {
  try {
    const rings: RingData = await Ring.findAll();
    return res.status(201).json(rings);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar os anéis' });
  }
};

export const createRing = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, power, carrier, forgedBy, image }: RingData = req.body;

    try {
      const isValid = await validateRing(forgedBy);
      if (isValid?.error) {
        return res.status(400).json(isValid?.error)
      }
    } catch (error) {
      return res.status(400).json(error);
    }
    
    const newRing = await Ring.create({ name, power, carrier, forgedBy, image });
    
    return res.status(201).json(newRing);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o anel' });
  }
}

export const updateRing = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { name, power, carrier, forgedBy, image } = req.body;

    const ring = await Ring.findByPk(id);
    if (!ring) return res.status(500).json({ error: 'Anel não encontrado' })

    try {
      const isValid = await validateRing(forgedBy);
      if (isValid?.error) {
        return res.status(400).json(isValid?.error)
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  

    await ring.update({ name, power, carrier, forgedBy, image })
    return res.status(201).json(ring);
  } catch (error) {
    return res.status(500).json({ error: 'Não foi possível editar as informações do anel'})
  }
}