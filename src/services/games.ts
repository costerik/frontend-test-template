import { GetGamesResponse } from '@/app/api/games/route';
import constants from '@/config/constants';

export type GetGamesParams = {
  page?: string;
  genre?: string;
};

export const getGames = async (params?: GetGamesParams) => {
  try {
    const paramsSanitized = Object.entries(params || {}).reduce<
      Record<string, string>
    >((acc, [key, value]) => {
      if (value && value !== 'All') {
        acc[key] = value;
      }
      return acc;
    }, {});
    const queryParams = new URLSearchParams(paramsSanitized);
    const url = `${constants.API_URL}/api/games`;
    const response: Response = await fetch(
      `${url}${queryParams.size ? `?${queryParams.toString()}` : ''}`,
      {
        cache: 'no-store',
      },
    );
    const games: GetGamesResponse = await response.json();
    return games;
  } catch (error) {
    console.error('There was an error retrieving games', error);
  }
};
