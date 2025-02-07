'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon/Icon';
import CartList from '@/components/CartList/CartList';
import OrderSummary from '@/components/OrderSummary/OrderSummary';
import { useCart } from '@/contexts/Cart/Cart';

export default function Cart() {
  const [itemsQtyLabel, setItemsQtyLabel] = useState('0 items');
  const { items } = useCart();

  useEffect(() => {
    setItemsQtyLabel(`${items.length} item${items.length === 1 ? '' : 's'}`);
  }, [items]);

  return (
    <div className="2xl:container">
      <Link href="/" className="my-4 flex gap-x-3 2xl:my-6">
        <Icon name="back-arrow" className="size-3 text-gray-750" />
        <p className="font-medium text-gray-750">Back to Catalog</p>
      </Link>
      <div className="my-8 flex flex-col gap-y-3 2xl:my-12">
        <h1 className="text-2xl font-bold uppercase text-gray-750 2xl:text-4xl">
          Your Cart
        </h1>
        <p className="text-xl text-gray-750 2xl:text-2xl">{itemsQtyLabel}</p>
      </div>
      <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:gap-x-20">
        <CartList className="2xl:flex-1" data={items} />
        <OrderSummary className="2xl:mt-0 2xl:flex-[0.5]" items={items} />
      </div>
    </div>
  );
}
