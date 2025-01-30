'use client';
import { FilterProps } from '@/components/Filter/types';
import { useRouter } from 'next/navigation';
import { useId } from 'react';

const Filter = (props: FilterProps) => {
  const { label, options, onChange } = props;
  const router = useRouter();
  const filterId = useId();

  return (
    <div className="mb-8 flex h-14 items-center justify-center gap-x-6 text-xl text-gray-750">
      <label className="font-bold" htmlFor={filterId}>
        {label}
      </label>
      <span className="font-bold">|</span>
      <select
        name={label}
        id={filterId}
        className="flex-1"
        onChange={(e) => {
          onChange?.(e.target.value);
          const params = new URLSearchParams(window.location.search);
          params.set('genre', e.target.value);

          router.push(`?${params.toString()}`);
        }}
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
