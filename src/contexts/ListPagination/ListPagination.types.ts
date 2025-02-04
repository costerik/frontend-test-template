import { GetGamesParams } from '@/services/games';
import { type Game } from '@/utils/endpoint';
import { Dispatch } from 'react';

export enum ListPaginationInternalState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
}

export enum ListPaginationActionsTypes {
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  RESET = 'RESET',
}

export type ListPaginationState = {
  page: number;
  total: number;
  state: ListPaginationInternalState;
  data: Game[];
  error: string | null;
};

export type GetPageStarted = {
  type: ListPaginationActionsTypes.STARTED;
};

export type GetPageSuccess = {
  type: ListPaginationActionsTypes.SUCCESS;
  payload: {
    page: number;
    total: number;
    data: Game[];
  };
};

export type Reset = {
  type: ListPaginationActionsTypes.RESET;
};

export type GetPageError = {
  type: ListPaginationActionsTypes.ERROR;
  payload: string | null;
};

export type ListPaginationActions =
  | GetPageStarted
  | GetPageSuccess
  | GetPageError
  | Reset;

export type ListPaginationContextType = {
  state: ListPaginationState;
  fetchGames: (params?: GetGamesParams) => Promise<void>;
  reset: () => void;
  dispatch: Dispatch<ListPaginationActions>;
};
