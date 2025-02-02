import { type SVGProps } from 'react';

import { IconName } from '@/components/Icon/Icon.types';
import { classnames } from '@/utils/helpers/styles';

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      {...props}
      className={classnames('inline h-[1em] w-[1em] self-center', className)}
    >
      <use href={`/images/icons/sprite.svg#${name}`} />
    </svg>
  );
}
