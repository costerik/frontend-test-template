import { OrderSummaryProps } from '@/components/OrderSummary/OrderSummary.types';
import Button from '@/components/Button/Button';
import { classnames } from '@/utils/helpers/styles';

const OrderSummary = ({ items, className }: OrderSummaryProps) => {
  const total = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  return (
    <div className={classnames('mb-8 mt-12 flex flex-col gap-y-10', className)}>
      <div className="rounded-lg border border-gray-450 px-4 py-6 2xl:px-6 2xl:py-8">
        <div className="flex flex-col gap-y-3">
          <p className="text-xl font-bold text-gray-750 2xl:text-2xl">
            Order Summary
          </p>
          <p className="text-lg text-gray-750">
            {items.length} item{items.length === 1 ? '' : 's'}
          </p>
        </div>
        <div className="pt-6 2xl:pt-8">
          {items.length && (
            <ul className="flex flex-col gap-y-3 border-b border-b-gray-101 py-5">
              {items.map((item) => {
                return (
                  <li key={item.id} className="text-lg text-gray-750">
                    <p className="flex justify-between">
                      <span className="flex-1">{item.name}</span>
                      <span>$ {item.price}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
          <p className="flex justify-between py-5 text-xl font-bold">
            <span>Order Total</span>
            <span>$ {total}</span>
          </p>
        </div>
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default OrderSummary;
