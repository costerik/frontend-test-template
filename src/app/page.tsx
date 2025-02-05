import Providers from '@/app/providers';
import Filter from '@/components/Filter/Filter';
import GamesList from '@/components/GamesList/GamesList';
import { getGames } from '@/services/games';
import { availableFilters } from '@/utils/endpoint';

type HomeProps = {
  searchParams: {
    genre: string;
    page: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const filters = ['All', ...availableFilters].map((filter) => ({
    label: filter,
    value: filter,
  }));

  const response = await getGames({
    genre: searchParams.genre,
    page: searchParams.page,
  });

  return (
    <div className="2xl:container">
      <h1 className="my-8 text-2xl font-bold uppercase text-gray-750 2xl:my-12 2xl:text-4xl">
        Top Sellers
      </h1>
      <div className="ml-[calc(-50vw+_50%)] w-screen border-b border-gray-101"></div>
      <Providers>
        <Filter label="Genre" options={filters} />
        <GamesList data={response?.games || []} />
      </Providers>
    </div>
  );
}
