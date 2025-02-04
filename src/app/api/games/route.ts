import { type Game, allGames, availableFilters, delay } from '@/utils/endpoint';

const ITEMS_PER_PAGE = 12;

export type GetGamesResponse = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get('genre');
  let page = parseInt(searchParams.get('page') ?? '1');

  let games = allGames;
  if (genre && availableFilters.includes(genre)) {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase(),
    );
  }

  if (page < 1 || isNaN(page)) page = 1;

  // Mock a delay to simulate a real API
  await delay(2000);

  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = page * ITEMS_PER_PAGE;
  const gamesSlice = games.slice(fromIndex, toIndex);

  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);
  const currentPage = page;

  const response: GetGamesResponse = {
    games: gamesSlice,
    availableFilters,
    totalPages,
    currentPage,
  };

  return Response.json(response);
}
