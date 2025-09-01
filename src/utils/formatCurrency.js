import currency from 'currency.js';

const defaultOptions = {
  symbol: '$',
  separator: ',',
  decimal: '.',
  precision: 2,
};

const formatCurrency = (value, options = {}) => {
  const opt = { ...defaultOptions, ...options };
  return currency(value, opt).format();
};

export { formatCurrency };
