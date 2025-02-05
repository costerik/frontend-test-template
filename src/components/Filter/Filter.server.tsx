import Filter from '@/components/Filter/Filter';
import { type FilterServerProps } from '@/components/Filter/Filter.types';

const FilterServer = ({ options, label }: FilterServerProps) => {
  return <Filter label={label} options={options} />;
};

export default FilterServer;
