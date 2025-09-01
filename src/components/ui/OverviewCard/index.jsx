import { formatPercentage } from "../../../utils/formatPercentage";
import { formatCurrency } from "../../../utils/formatCurrency";
import { ArrowIcon } from "../ArrowIcon";

const OverviewCard = ({ currentCrypto }) => {

  // Formats value to currency
  const currentPrice = formatCurrency(currentCrypto.market_data?.current_price?.usd);

  return(
    <div className="flex flex-wrap gap-4 items-center">

      {/* Current price section */}
      <div className="grid grid-cols-1 grid-rows-2">
        <div className="flex gap-2.5 items-center">
          <img 
            src={currentCrypto.image?.small}
            className="w-6 h-6"
            alt={currentCrypto.name}
          />

          <div className="flex items-baseline">
            <h1 className="text-xl font-bold dark:text-gray-200">
              {currentCrypto.name}
            </h1>

            <p className="uppercase ms-2 text-sm font-medium text-zinc-700 dark:text-gray-400">
              {currentCrypto.symbol}
            </p>

            <span className="text-sm text-white leading-none ms-2 py-0.5 px-2 rounded-2xl bg-violet-500 self-baseline">
              #{currentCrypto.market_cap_rank}
            </span>
          </div>
        </div>

        <h2 className="text-4xl font-bold dark:text-gray-100">
          {currentPrice}
        </h2>
      </div>

      {/* Price variations section */}
      <div className="flex items-center justify-evenly flex-2">

        {/* Last 24 h */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center 
          justify-center gap-2 border-e border-gray-300 dark:border-slate-700">

          <p className="text-lg text-center text-slate-600 dark:text-gray-400">24 Horas</p>

          <div className="flex gap-1 items-end justify-center">
            <ArrowIcon value={currentCrypto.market_data?.price_change_percentage_24h} />

            <h3 className="text-xl text-center font-black lg:text-2xl dark:text-gray-100">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_24h)}
            </h3>
          </div>
        </div>

        {/* Last 7d */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center 
        justify-center gap-2 border-e border-gray-300 dark:border-slate-700">

          <p className="text-lg text-center text-slate-600 dark:text-gray-400">7 Días</p>

          <div className="flex gap-1 items-end justify-center">
            <ArrowIcon value={currentCrypto.market_data?.price_change_percentage_7d} />

            <h3 className="text-xl text-center font-black lg:text-2xl dark:text-gray-100">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_7d)}
            </h3>
          </div>
        </div>

        {/* Last 14d */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center
         justify-center gap-2 border-e border-gray-300 dark:border-slate-700">

          <p className="text-lg text-center text-slate-600 dark:text-gray-400">14 Días</p>

          <div className="flex gap-1 items-end justify-center">  
            <ArrowIcon value={currentCrypto.market_data?.price_change_percentage_14d} />

            <h3 className="text-xl text-center font-black lg:text-2xl dark:text-gray-100">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_14d)}
            </h3>
          </div>
        </div>

        {/* Last month */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center justify-center gap-2">
          <p className="text-lg text-center text-slate-600 dark:text-gray-400">1 Mes</p>

          <div className="flex gap-1 items-end justify-center">
            <ArrowIcon value={currentCrypto.market_data?.price_change_percentage_30d} />

            <h3 className="text-xl text-center font-black lg:text-2xl dark:text-gray-100">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_30d)}
            </h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export { OverviewCard }