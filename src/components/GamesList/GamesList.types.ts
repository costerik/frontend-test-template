import { type Game } from '@/utils/endpoint';
import { CardVariants } from '@/components/Card/Card.types';

export type GamesListProps = {
  data: Game[];
  variant: CardVariants;
};
