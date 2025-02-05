import GamesList from '@/components/GamesList/GamesList';
import { type GamesListServerProps } from '@/components/GamesList/GamesList.types';

const GamesListServer = ({ data }: GamesListServerProps) => {
  return <GamesList data={data} />;
};

export default GamesListServer;
