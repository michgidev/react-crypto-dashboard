import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../../utils/formatCurrency";
import { formatPercentage } from "../../../utils/formatPercentage";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

// Data key to set table columns
const tableHeadings = [
  "market_cap_rank",
  "name",
  "current_price",
  "price_change_percentage_24h",
  "low_24h",
  "high_24h",
  "market_cap"
];

// Relate text with heading
const columnHeaders = {
  market_cap_rank: "# Ranking",
  name: "Nombre",
  current_price: "Precio Actual",
  price_change_percentage_24h: "24h",
  low_24h: "Mínimo 24h",
  high_24h: "Máximo 24h",
  market_cap: "Capitalización"
};

// Applies format to values
const valuesFormatter = {
  current_price: (params) => formatCurrency(params.value),
  price_change_percentage_24h: (params) => formatPercentage(params.value),
  low_24h: (params) => formatCurrency(params.value),
  high_24h: (params) => formatCurrency(params.value),
  market_cap: (params) => formatCurrency(params.value),
};

// Generate and format colums for table
function getColumns(cryptos) {
  return (
    tableHeadings
      .filter((key) => key in cryptos[0])
      .map((key) => ({
        field: key,
        headerName: columnHeaders[key],
        valueFormatter: valuesFormatter[key],

        ...(key === "name" && {
          cellRenderer: (params) => (
            <span className="flex items-center gap-2">
              <img src={params.data.image} alt={params.value} className="w-6 h-6"/>
              {params.value}
            </span>
          )
        }),

        ...(key === "price_change_percentage_24h" && {
          cellRenderer: (params) => {
            const value = params.value;
            const formatted = formatPercentage(value);
            const isPositive = value >= 0;
            return (
              <span className={`flex items-center gap-0.5 ${ isPositive ? 'text-emerald-500' : 'text-red-500' }`}>
                {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                {formatted}
              </span>
            );
          },
        }),
      }))
  );
}

// Generate rows for table
function getRows(cryptos) {
  return (
    cryptos.map((item) => {
      const filteredItem = {};

      tableHeadings.forEach((key) => {
        filteredItem[key] = item[key];
      });

      filteredItem.image = item.image;

      return filteredItem;
    })
  );
}

const TableCard = () => {

  const cryptos = useSelector((state) => state.data.cryptos);

  const [colDefs, setColDefs] = useState([]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {

    if (cryptos && cryptos.length > 0) {
      setColDefs(getColumns(cryptos));
      setRowData(getRows(cryptos));
    }

  }, [cryptos]);

  return(
    <div className="w-full p-4 bg-white rounded-2xl shadow-md shadow-indigo-100">

      <h2 className='text-2xl font-bold p-2 mb-2'>
        Precios por Market Cap
      </h2>

      <div className="w-full h-[500px] max-h-[600px] overflow-y-auto">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>

    </div>
  );
}

export { TableCard };