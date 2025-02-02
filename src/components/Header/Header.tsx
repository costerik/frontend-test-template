import { Icon } from '@/components/Icon/Icon';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-150">
      <div className="flex items-center justify-between px-6 py-5 2xl:container 2xl:px-0">
        <Link className="text-2xl font-bold text-gray-650" href="/">
          GamerShop
        </Link>
        <Link href="/cart">
          <Icon name="cart" className="size-6 text-gray-650" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
