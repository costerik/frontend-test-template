import { Icon } from '@/components/Icon/Icon';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="grid h-44 place-items-center bg-neutral-700">
      <Link href="/">
        <Icon name="logo" className="h-11 w-44 text-white" />
      </Link>
    </footer>
  );
};

export default Footer;
