'use client';
import { useEffect, useState } from 'react';
import List from '@/components/List/List';
import ListFooter from '@/components/List/ListFooter';
import Card from '@/components/Card/Card';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';
import { ListPaginationInternalState } from '@/contexts/ListPagination/ListPagination.types';
import { type GamesListProps } from '@/components/GamesList/GamesList.types';
import { CardVariants, type CardProps } from '@/components/Card/Card.types';

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
        return <Card variant={CardVariants.CATALOG} {...item} />;
      }}
      Footer={ListFooter}
      loading={state.state === ListPaginationInternalState.LOADING}
    />
  );
};

export default GamesList;
