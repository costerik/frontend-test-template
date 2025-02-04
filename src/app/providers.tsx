'use client';

import { ListPaginationProvider } from '@/contexts/ListPagination/ListPagination';
import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <ListPaginationProvider>{children}</ListPaginationProvider>;
};

export default Providers;
