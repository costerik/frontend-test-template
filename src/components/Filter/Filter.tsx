'use client';
import { FilterProps } from '@/components/Filter/Filter.types';
import { useListPagination } from '@/contexts/ListPagination/ListPagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useId } from 'react';

const Filter = (props: FilterProps) => {
  const { label, options, onChange } = props;
  const router = useRouter();
  const filterId = useId();
  const params = useSearchParams();
  const { reset } = useListPagination();

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
          localParams.set('genre', e.target.value);
          onChange?.(e.target.value);
          router.replace(`?${localParams.toString()}`);
          reset();
        }}
        defaultValue={params.get('genre') || ''}
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
