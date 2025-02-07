import { type Game } from '@/utils/endpoint';

export type CartState = {
  items: Game[];
};

export type CartContextType = {
  state: CartState;
  items: Game[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: string) => void;
  clearCart: () => void;
  isInCart: (gameId: string) => boolean;
};
