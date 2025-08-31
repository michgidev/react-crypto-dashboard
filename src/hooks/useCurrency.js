import { useMemo } from 'react';
import currency from 'currency.js';

const defaultOptions = {
  symbol: '$',
  separator: ',',
  decimal: '.',
  precision: 2,
};

const useCurrency = (value, options = {}) => {

  const formattedValue = useMemo(() => {
    const opt = { ...defaultOptions, ...options };
    return currency(value, opt).format();
  }, [value, options]);

  return formattedValue;
};

export { useCurrency };
