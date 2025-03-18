enum ForgedBy {
  ELFOS = 'elfos',
  HOMENS = 'homens',
  ANOES = 'anões',
  SAURON = 'sauron',
}

export interface RingData {
  name: string;
  power: string;
  carrier: string;
  forgedBy: ForgedBy;
  image: string;
}