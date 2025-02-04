'use client';
import Button from '@/components/Button/Button';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';

const ListFooter = () => {
  const { fetchGames, state } = useListPagination();
  return (
    <Button
      disabled={state.page >= state.total}
      onClick={() => {
        fetchGames({
          page: (state.page + 1).toString(),
        });
      }}
    >
      See More
    </Button>
  );
};

export default ListFooter;
