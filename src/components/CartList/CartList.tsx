import List from '@/components/List/List';
import Card from '@/components/Card/Card';
import { CardVariants, type CardProps } from '@/components/Card/Card.types';
import { CartListProps } from '@/components/CartList/CartList.types';
import { classnames } from '@/utils/helpers/styles';

const CartList = ({ data, className }: CartListProps) => {
  return (
    <List<CardProps>
      className={classnames(
        'gap-y-0 py-0 2xl:grid-cols-1 2xl:gap-0 2xl:py-0 [&>li:last-child>div]:border-b-0',
        className,
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        return (
          <Card
            variant={CardVariants.CART}
            className="border-b border-b-gray-450"
            {...item}
          />
        );
      }}
    />
  );
};

export default CartList;
