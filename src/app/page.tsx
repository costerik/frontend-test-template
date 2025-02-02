import Card from '@/components/Card/Card';
import { CardProps } from '@/components/Card/Card.types';
import Filter from '@/components/Filter/Filter';
import List from '@/components/List/List';
import ListFooter from '@/components/List/ListFooter';
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
    <div className="2xl:container">
      <h1 className="my-8 text-2xl font-bold uppercase text-gray-750 2xl:my-12 2xl:text-4xl">
        Top Sellers
      </h1>
      <Filter label="Genre" options={filters} />
      <div className="ml-[calc(-50vw+_50%)] w-screen border-b border-gray-101"></div>
      <List<CardProps>
        data={response?.games || []}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          return <Card {...item} />;
        }}
        Footer={ListFooter}
      />
    </div>
  );
}
