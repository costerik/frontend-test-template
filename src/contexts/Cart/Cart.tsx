'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { CartContextType, CartState } from '@/contexts/Cart/Cart.types';
import { Game } from '@/utils/endpoint';

const CART_STORAGE_KEY = 'GAME-LIBRAY-CART';

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addToCart = (game: Game) => {
    setState((prevState) => {
      if (prevState.items.some((item) => item.id === game.id)) {
        return prevState; // Don't add if already exists
      }

      const newItems = [...prevState.items, { ...game, quantity: 1 }];
      return {
        items: newItems,
      };
    });
  };

  const removeFromCart = (gameId: string) => {
    setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== gameId);
      return {
        items: newItems,
      };
    });
  };

  const isInCart = (gameId: string) => {
    return !!state.items.find((game) => game.id === gameId);
  };

  const clearCart = () => {
    setState(initialState);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        items: state.items,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
