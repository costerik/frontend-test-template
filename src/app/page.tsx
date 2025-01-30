import Filter from '@/components/Filter/Filter';
import { availableFilters } from '@/utils/endpoint';
availableFilters.unshift('All');

export default async function Home() {
  const filters = availableFilters.map((filter) => ({
    label: filter,
    value: filter,
  }));
  return (
    <main className="overflow-y-auto">
      <h1 className="my-8 text-2xl font-bold uppercase text-gray-750">
        Top Sellers
      </h1>
      <Filter label="Genre" options={filters} />
      <div className="fixed left-0 w-screen border-b border-gray-101"></div>
    </main>
  );
}
