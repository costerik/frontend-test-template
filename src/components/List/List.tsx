import { ListProps } from '@/components/List/List.types';
import { classnames } from '@/utils/helpers/styles';

const List = <T,>({
  data,
  renderItem,
  keyExtractor,
  className,
  Footer,
}: ListProps<T>) => {
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default List;
