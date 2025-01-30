import { twMerge } from 'tailwind-merge';

/**
 * @description Concatenates and filters the provided arguments into a single string.
 * @param {...(undefined|null|string|boolean)[]} args - The arguments to be concatenated.
 * @returns {string} - The concatenated string.
 *
 * @example
 * // Example usage:
 * const className = classnames(
 *   "cursor-pointer border p-4",
 *   !disabled ? "bg-primary text-white border-primary" : "bg-gray-300 cursor-not-allowed"
 * ); // "cursor-pointer border p-4 bg-gray-300 cursor-not-allowed"
 **/
export function classnames(
  ...args: Array<undefined | null | string | boolean>
): string {
  return twMerge(
    args
      .flat()
      .filter((x) => {
        return typeof x === 'string';
      })
      .join(' '),
  );
}
