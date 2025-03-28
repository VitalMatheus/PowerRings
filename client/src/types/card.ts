enum ForgedBy {
  ELFOS = 'elfos',
  HOMENS = 'homens',
  ANOES = 'anões',
  SAURON = 'sauron',
}

export interface RingData {
  id: number;
  name: string;
  power: string;
  carrier: string;
  forgedBy: ForgedBy;
  image: string;
}

export interface CarouselProps {
  data: RingData[];
  handleEdit: (item: RingData) => void,
  handleDelete: (item: RingData) => void,
}
