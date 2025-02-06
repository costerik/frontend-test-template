import Image from 'next/image';
import { type CardProps, CardVariants } from '@/components/Card/Card.types';
import { Icon } from '@/components//Icon/Icon';
import Button from '@/components/Button/Button';
import { classnames } from '@/utils/helpers/styles';

const Card = ({
  name,
  image,
  genre,
  price,
  description,
  className,
  variant = CardVariants.CATALOG,
}: CardProps) => {
  const isCatalog = variant === CardVariants.CATALOG;
  const isCart = variant === CardVariants.CART;
  return (
    <div
      className={classnames(
        `flex h-full flex-col justify-between p-6 ${isCatalog ? 'rounded-2xl border border-gray-450' : 'px-4 py-5'}`,
        className,
      )}
    >
      <div>
        <div className={`${isCart ? 'flex gap-x-4' : ''}`}>
          <div
            className={`relative w-full overflow-hidden rounded-t-2xl ${isCatalog ? 'h-60' : 'h-32'}`}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 1535px) 100vw, 33vw"
              priority
            />
          </div>
          {isCart && (
            <span className="cursor-pointer">
              <Icon name="close" className="size-3 text-gray-450" />
            </span>
          )}
        </div>
        <div className={`py-5 ${isCart ? 'pb-0' : ''}`}>
          <p className="pb-3 font-bold text-neutral-500">{genre}</p>
          <p className="flex justify-between text-lg font-bold text-gray-750">
            <span>{name}</span>
            {isCatalog && <span>${price}</span>}
          </p>
          {isCart && (
            <div>
              <p className="pb-11 pt-2 text-neutral-500">{description}</p>
              <p className="text-right text-lg font-bold text-gray-750">
                ${price}
              </p>
            </div>
          )}
        </div>
      </div>
      {isCatalog && <Button variant="unfill-secondary">ADD TO CART</Button>}
    </div>
  );
};

export default Card;
