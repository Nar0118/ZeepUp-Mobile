import { useRef, useCallback } from 'react';

/**
 * A custom React hook for creating debounced callbacks.
 *
 * @param func - The function to be debounced.
 * @param wait - The debounce delay in milliseconds.
 *
 * @returns A debounced callback function.
 *
 * @example
 * const debouncedSearch = useDebouncedCallback((query) => {
 *   // Your callback logic here
 * }, 300); // Debounce for 300ms
 *
 * // Usage: debouncedSearch('searchQuery');
 */

type FunctionType = (...args: unknown[]) => void;

const useDebouncedCallback = (func: FunctionType, delay: number) => {
  const timeout = useRef<NodeJS.Timeout | any>(null);

  return useCallback(
    (...args: unknown[]) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, delay);
    },
    [func, delay],
  );
};

export default useDebouncedCallback;
