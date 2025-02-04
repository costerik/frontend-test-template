'use client';
import List from '@/components/List/List';
import ListFooter from './ListFooter';
import Card from '@/components/Card/Card';
import { type Game } from '@/utils/endpoint';
import { type CardProps } from '@/components/Card/Card.types';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';

const ListServer = ({ data }: { data: Game[] }) => {
  const { state } = useListPagination();
  const localData = state.data.length ? state.data : data;

  return (
    <List<CardProps>
      data={localData}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        return <Card {...item} />;
      }}
      Footer={ListFooter}
    />
  );
};

export default ListServer;
