import Link from 'next/link';
import { Icon } from '@/components/Icon/Icon';
import { getGames } from '@/services/games';
import CartList from '@/components/CartList/CartList';

export default async function Cart() {
  const response = await getGames();
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
        <p className="text-xl text-gray-750 2xl:text-2xl">3 items</p>
      </div>
      <CartList data={response.games || []} />
    </div>
  );
}
