'use client';
import { FilterProps } from '@/components/Filter/Filter.types';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useState } from 'react';

const Filter = (props: FilterProps) => {
  const { label, options, onChange } = props;
  const router = useRouter();
  const filterId = useId();
  const [genre, setGenre] = useState('');
  const { reset, fetchGames } = useListPagination();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setGenre(params.get('genre') ?? '');
  }, []);

  return (
    <div className="mb-8 flex h-14 items-center gap-x-6 text-xl text-gray-750 2xl:mb-12 2xl:justify-end">
      <label className="font-bold" htmlFor={filterId}>
        {label}
      </label>
      <span className="font-bold">|</span>
      <select
        name={label}
        id={filterId}
        className="flex-1 2xl:max-w-60"
        onChange={(e) => {
          const localParams = new URLSearchParams(window.location.search);
          const value = e.target.value;
          localParams.set('genre', value);
          onChange?.(value);
          setGenre(value);
          reset();
          router.replace(`?${localParams.toString()}`);
          fetchGames({ genre: value });
        }}
        value={genre}
      >
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
