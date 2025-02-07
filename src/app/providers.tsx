'use client';

import { CartProvider } from '@/contexts/Cart/Cart';
import { ListPaginationProvider } from '@/contexts/ListPagination/ListPagination';
import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ListPaginationProvider>
      <CartProvider>{children}</CartProvider>
    </ListPaginationProvider>
  );
};

export default Providers;
