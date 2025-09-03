import { formatCurrency } from "../../../utils/formatCurrency";
import { formatPercentage } from "../../../utils/formatPercentage";
import { ArrowIcon } from "../ArrowIcon";

const NftDetailCard = ({ data }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center
        lg:pb-4 lg:border-b border-gray-300 dark:border-slate-700">

        <div className="flex-1">

          <div className="flex gap-2.5 items-center">
            <img 
              src={data.thumb}
              className="w-6 h-6"
              alt={data.name}
            />

            <div className="flex items-baseline">
              <h2 className="text-xl font-bold dark:text-gray-200">
                {data.name}
              </h2>

              <p className="uppercase ms-2 text-sm font-medium text-zinc-700 dark:text-gray-400">
                {data.symbol}
              </p>
            </div>
          </div>

          <p className="text-4xl font-bold dark:text-gray-100">
            {formatCurrency(data.floor_price_in_native_currency)}
            
            <span className="uppercase ms-2 text-sm font-medium text-zinc-700 dark:text-gray-400">
              {data.native_currency_symbol}
            </span>
          </p>
        </div>

        {/* Last 24 h */}
        <div className="flex flex-1 items-center justify-between py-4 border-y 
          border-gray-300 dark:border-slate-700 lg:justify-start lg:border-none lg:py-0">

          <div className="p-0 flex-col items-center justify-center gap-2 
            border-gray-300 dark:border-slate-700 lg:px-5 lg:py-2 lg:border-s">

            <p className="text-lg text-center text-slate-600 dark:text-gray-400">24 Horas</p>

            <div className="flex gap-1 items-end justify-center">
              <ArrowIcon value={data.data?.floor_price_in_usd_24h_percentage_change} />

              <p className="text-2xl text-center font-black dark:text-gray-100">
                {formatPercentage(data.data?.floor_price_in_usd_24h_percentage_change)}
              </p>
            </div>

          </div>

          {/* Sparkline */}
          <img src={data.data?.sparkline} 
            className="h-20 w-[240px] lg:w-[190px] object-contain" />
        </div>
      </div>

      {/* Market cap and total volume */}
      <div className="grid grid-cols-1 mt-4 gap-4 lg:grid-cols-2 lg:mt-6 lg:gap-6">

        <div className="h-[140px] flex items-center justify-center 
          flex-col rounded-2xl bg-indigo-50 dark:bg-slate-700">
            
            <h3 className="text-xl text-center font-bold mb-2 text-slate-600 dark:text-gray-400">
              Promedio 24 Horas
            </h3>

            <p className="text-3xl text-center font-black dark:text-gray-100">
              { data.data?.h24_average_sale_price }
            </p>
        </div>

        <div className="h-[140px] flex items-center justify-center 
          flex-col rounded-2xl bg-indigo-50 dark:bg-slate-700">
            
            <h3 className="text-xl text-center font-bold mb-2 text-slate-600 dark:text-gray-400">
              Volumen 24 Horas
            </h3>

            <p className="text-3xl text-center font-black dark:text-gray-100">
              { data.data?.h24_volume }
            </p>
        </div>
      </div>
    </div>
  );
};

export { NftDetailCard };