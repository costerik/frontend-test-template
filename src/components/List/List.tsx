'use client';
import { ListProps } from '@/components/List/List.types';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';
import { ListPaginationInternalState } from '@/contexts/ListPagination/ListPagination.types';
import Spinner from '@/components/Spinner/Spinner';
import { classnames } from '@/utils/helpers/styles';

const List = <T,>({
  data,
  renderItem,
  keyExtractor,
  className,
  Footer,
}: ListProps<T>) => {
  const { state } = useListPagination();
  return (
    <>
      <ul
        className={classnames(
          'grid grid-cols-1 gap-y-6 py-8 2xl:grid-cols-3 2xl:gap-12 2xl:py-12',
          className,
        )}
      >
        {data.map((arg) => (
          <li key={keyExtractor(arg)}>{renderItem(arg)}</li>
        ))}
      </ul>
      {Footer && (
        <div className="mb-6">
          {state.state === ListPaginationInternalState.LOADING ? (
            <Spinner />
          ) : (
            <Footer />
          )}
        </div>
      )}
    </>
  );
};

export default List;
