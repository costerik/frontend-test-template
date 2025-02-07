'use client';
import Image from 'next/image';
import { type CardProps, CardVariants } from '@/components/Card/Card.types';
import { Icon } from '@/components//Icon/Icon';
import Button from '@/components/Button/Button';
import { classnames } from '@/utils/helpers/styles';
import { useCart } from '@/contexts/Cart/Cart';
import { useEffect, useState } from 'react';

const Card = ({
  id,
  name,
  image,
  genre,
  price,
  description,
  isNew,
  className,
  variant = CardVariants.CATALOG,
}: CardProps) => {
  const isCatalog = variant === CardVariants.CATALOG;
  const isCart = variant === CardVariants.CART;
  const { items, isInCart, addToCart, removeFromCart } = useCart();
  const [buttonLabel, setButtonLabel] = useState('ADD TO CART');

  useEffect(() => {
    setButtonLabel(isInCart(id) ? 'REMOVE FROM CART' : 'ADD TO CART');
  }, [items, isInCart, id]);

  return (
    <div
      className={classnames(
        `flex h-full flex-col justify-between p-6`,
        isCatalog ? 'rounded-2xl border border-gray-450' : 'px-4 py-5',
        className,
      )}
    >
      <div
        className={classnames(
          'flex flex-col',
          isCart ? '2xl:flex-row 2xl:gap-x-6' : '',
        )}
      >
        <div className={`${isCart ? 'flex gap-x-4 2xl:flex-1' : ''}`}>
          <div
            className={classnames(
              'relative w-full overflow-hidden rounded-t-2xl',
              isCatalog ? 'h-60' : 'h-32 rounded-t-none 2xl:h-full',
            )}
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
            <span
              className="cursor-pointer 2xl:hidden"
              onClick={() => removeFromCart(id)}
            >
              <Icon name="close" className="size-3 text-gray-450" />
            </span>
          )}
        </div>
        <div className={classnames('py-5', isCart ? 'pb-0 2xl:flex-1' : '')}>
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
        {isCart && (
          <span
            className="hidden cursor-pointer 2xl:block"
            onClick={() => removeFromCart(id)}
          >
            <Icon name="close" className="size-3 text-gray-450" />
          </span>
        )}
      </div>
      {isCatalog && (
        <Button
          onClick={() =>
            isInCart(id)
              ? removeFromCart(id)
              : addToCart({
                  id,
                  genre,
                  image,
                  name,
                  description,
                  price,
                  isNew,
                })
          }
          variant="unfill-secondary"
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default Card;
