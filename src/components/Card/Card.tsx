import Image from 'next/image';
import { CardProps } from '@/components/Card/Card.types';
import Button from '@/components/Button/Button';

const Card = ({ name, image, genre, price }: CardProps) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-450 p-6">
      <div>
        <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 1535px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="py-5">
          <p className="pb-3 font-bold text-neutral-500">{genre}</p>
          <p className="flex justify-between text-lg font-bold">
            <span>{name}</span> <span>${price}</span>
          </p>
        </div>
      </div>
      <Button variant="unfill-secondary">ADD TO CART</Button>
    </div>
  );
};

export default Card;
