'use client';

import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import {
  type ListPaginationState,
  type ListPaginationActions,
  type ListPaginationContextType,
  ListPaginationActionsTypes,
  ListPaginationInternalState,
} from '@/contexts/ListPagination/ListPagination.types';
import { GetGamesParams, getGames } from '@/services/games';
import { useSearchParams } from 'next/navigation';

const listPaginationInitialState: ListPaginationState = {
  page: 1,
  total: 1,
  state: ListPaginationInternalState.IDLE,
  data: [],
  error: null,
};

const listPaginationReducer = (
  state: ListPaginationState,
  action: ListPaginationActions,
): ListPaginationState => {
  switch (action.type) {
    case ListPaginationActionsTypes.STARTED:
      return {
        ...state,
        state: ListPaginationInternalState.LOADING,
        error: null,
      };
    case ListPaginationActionsTypes.SUCCESS: {
      return {
        ...state,
        ...action.payload,
        data: [...state.data, ...action.payload.data],
        state: ListPaginationInternalState.IDLE,
      };
    }
    case ListPaginationActionsTypes.ERROR:
      return {
        ...state,
        state: ListPaginationInternalState.IDLE,
        error: action.payload,
      };
    case ListPaginationActionsTypes.RESET:
      return { ...listPaginationInitialState };
    default:
      return state;
  }
};

const ListPaginationContext = createContext<
  ListPaginationContextType | undefined
>(undefined);

export function ListPaginationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    listPaginationReducer,
    listPaginationInitialState,
  );

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  const reset = useCallback(() => {
    dispatch({ type: ListPaginationActionsTypes.RESET });
  }, []);

  const fetchGames = useCallback(async (params?: GetGamesParams) => {
    dispatch({ type: ListPaginationActionsTypes.STARTED });
    try {
      const response = await getGames(params);
      dispatch({
        type: ListPaginationActionsTypes.SUCCESS,
        payload: {
          data: response.games,
          page: response.currentPage,
          total: response.totalPages,
        },
      });
    } catch (e: unknown) {
      const error = e as Error;
      dispatch({
        type: ListPaginationActionsTypes.ERROR,
        payload: `There was en error retrieving the games ${error.message}`,
      });
    }
  }, []);

  useEffect(() => {
    fetchGames({
      genre: genre ?? undefined,
    });
  }, [fetchGames, genre]);

  return (
    <ListPaginationContext.Provider
      value={{ state, dispatch, fetchGames, reset }}
    >
      {children}
    </ListPaginationContext.Provider>
  );
}

export function useListPagination() {
  const context = useContext(ListPaginationContext);
  if (!context) {
    throw new Error(
      'useListPaginataion must be used within a ListPaginationProvider',
    );
  }
  return context;
}
