import { Game } from '@/utils/endpoint';

export enum CardVariants {
  CATALOG = 'CATALOG',
  CART = 'CART',
}

export type CardProps = Game & {
  variant?: CardVariants;
  className?: string;
};
