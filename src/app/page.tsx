import Filter from '@/components/Filter/Filter';
import { getGames } from '@/services/games';
import { availableFilters } from '@/utils/endpoint';
availableFilters.unshift('All');

type HomeProps = {
  searchParams: {
    genre: string;
    page: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const filters = availableFilters.map((filter) => ({
    label: filter,
    value: filter,
  }));

  const response = await getGames({
    genre: searchParams.genre,
    page: searchParams.page,
  });

  return (
    <main className="overflow-y-auto">
      <h1 className="my-8 text-2xl font-bold uppercase text-gray-750">
        Top Sellers
      </h1>
      <Filter label="Genre" options={filters} />
      <div className="fixed left-0 w-screen border-b border-gray-101"></div>
      <ul>
        {response?.games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </main>
  );
}
