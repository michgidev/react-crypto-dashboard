import { formatUnixDate } from "./formatUnixDate";
import { formatCurrency } from "./formatCurrency";

const formatHistoricalChartData = (dataObj) => {
  
  const mappedData = {};

  for (const key in dataObj) {
    mappedData[key] = dataObj[key].map(([date, price]) => ({
      date: formatUnixDate(date),
      price: formatCurrency(price)
    }));
  }

  return mappedData;
}

export { formatHistoricalChartData };