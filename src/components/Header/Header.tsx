import { Icon } from '@/components/Icon/Icon';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-150 px-6 py-5">
      <Link className="text-2xl font-bold text-gray-650" href="/">
        GamerShop
      </Link>
      <Link href="/cart">
        <Icon name="cart" className="size-6 text-gray-650" />
      </Link>
    </header>
  );
};

export default Header;
