'use client';
import List from '@/components/List/List';
import ListFooter from '@/components/List/ListFooter';
import Card from '@/components/Card/Card';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';
import { ListPaginationInternalState } from '@/contexts/ListPagination/ListPagination.types';
import { type GamesListProps } from '@/components/GamesList/GamesList.types';
import { type CardProps } from '@/components/Card/Card.types';
import { useEffect, useState } from 'react';

const GamesList = ({ data }: GamesListProps) => {
  const { state } = useListPagination();
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(state.data);
  }, [state.data]);

  return (
    <List<CardProps>
      data={localData}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        return <Card {...item} />;
      }}
      Footer={ListFooter}
      loading={state.state === ListPaginationInternalState.LOADING}
    />
  );
};

export default GamesList;
