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
      if (value) {
        acc[key] = value;
      }
      return acc;
    }, {});
    const queryParams = new URLSearchParams(paramsSanitized);
    // Get base URL depending on environment
    const baseUrl = typeof window === 'undefined' ? constants.API_URL : '';

    if (!baseUrl && typeof window === 'undefined') {
      throw new Error('NEXT_PUBLIC_API_URL is not defined');
    }

    const url = `${baseUrl}/api/games`;
    console.log('URL', url);
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
    throw error;
  }
};
