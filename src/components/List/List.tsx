import Spinner from '@/components/Spinner/Spinner';
import { classnames } from '@/utils/helpers/styles';
import { type ListProps } from '@/components/List/List.types';

const List = <T,>({
  data,
  renderItem,
  keyExtractor,
  className,
  Footer,
  loading,
}: ListProps<T>) => {
  return (
    <>
      {data?.length ? (
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
      ) : null}
      {Footer && (
        <div className="mb-6">{loading ? <Spinner /> : <Footer />}</div>
      )}
    </>
  );
};

export default List;
