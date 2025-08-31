const formatPercentage = (value) => {
  
  const shortValue = Math.trunc(value * 10) / 10;

  return `${shortValue.toFixed(1)}%`;
}

export { formatPercentage };