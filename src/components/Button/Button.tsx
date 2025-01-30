import { ButtonProps } from '@/components/Button/types';
import { classnames } from '@/utils/helpers/styles';

const className = {
  'fill-primary': 'bg-gray-650 text-white',
  'unfill-secondary': 'bg-transparent text-gray-750 border-gray-750 border',
};

const Button = (props: ButtonProps) => {
  const { variant, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${className[variant || 'fill-primary']} ${classnames(rest.className, 'h-14 w-full rounded-lg')}`}
    >
      {rest.children}
    </button>
  );
};

export default Button;
