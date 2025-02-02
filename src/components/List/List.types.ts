import { ReactNode } from 'react';

export type ListProps<T = unknown> = {
  className?: string;
  data: Array<T>;
  keyExtractor: (arg: T) => string;
  renderItem: (arg: T) => ReactNode;
  Footer?: () => ReactNode;
};
