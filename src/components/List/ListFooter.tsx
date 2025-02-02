'use client';
import Button from '@/components/Button/Button';

const ListFooter = () => (
  <Button
    onClick={() => {
      console.log('ListFooter');
    }}
  >
    See More
  </Button>
);

export default ListFooter;
