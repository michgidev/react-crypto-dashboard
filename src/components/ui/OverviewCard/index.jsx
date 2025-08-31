import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useCurrency } from "../../../hooks/useCurrency";
import { formatPercentage } from "../../../utils/formatPercentage";

const OverviewCard = ({ currentCrypto }) => {

  const setIcon = (value) => (
    (value > 0)  ? <ArrowUpRight color="#1DD6B4" /> : <ArrowDownLeft color="#F46D22"/>
  );

  console.log(currentCrypto);

  // Formats value to currency
  const currentPrice = useCurrency(currentCrypto.market_data?.current_price?.usd);

  return(
    <div className="flex flex-wrap justify-between gap-4 items-center">

      {/* Current price section */}
      <div className="grid grid-cols-1 grid-rows-2">
        <div className="flex gap-2.5 items-center">
          <img 
            src={currentCrypto.image?.small}
            className="w-6 h-6"
            alt={currentCrypto.name}
          />

          <div className="flex items-baseline">
            <h1 className="text-xl font-bold">
              {currentCrypto.name}
            </h1>

            <p className="uppercase ms-2 text-sm font-medium text-zinc-700">
              {currentCrypto.symbol}
            </p>

            <span className="text-sm text-white leading-none ms-2 py-0.5 px-2 rounded-2xl bg-violet-500 self-baseline">
              #{currentCrypto.market_cap_rank}
            </span>
          </div>
        </div>

        <h2 className="text-4xl font-bold">
          {currentPrice}
        </h2>
      </div>

      {/* Price variations section */}
      <div className="flex items-center justify-evenly flex-2 gap-4">

        {/* Last 24 h */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center justify-center gap-2 border-e border-gray-300">
          <p className="text-lg text-center text-slate-600">24 Horas</p>

          <div className="flex gap-1 items-end justify-center">
            <h3 className="text-xl text-center font-black lg:text-2xl">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_24h)}
            </h3>

            {setIcon(currentCrypto.market_data?.price_change_percentage_24h)}
          </div>

        </div>

        {/* Last 7d */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center justify-center gap-2 border-e border-gray-300">
          <p className="text-lg text-center text-slate-600">7 Días</p>

          <div className="flex gap-1 items-end justify-center">
            <h3 className="text-xl text-center font-black lg:text-2xl">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_7d)}
            </h3>

            {setIcon(currentCrypto.market_data?.price_change_percentage_7d)}
          </div>
        </div>

        {/* Last 14d */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center justify-center gap-2 border-e border-gray-300">
          <p className="text-lg text-center text-slate-600">14 Días</p>

          <div className="flex gap-1 items-end justify-center">  
            <h3 className="text-xl text-center font-black lg:text-2xl">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_14d)}
            </h3>

            {setIcon(currentCrypto.market_data?.price_change_percentage_14d)}
          </div>
        </div>

        {/* Last month */}
        <div className="p-1 lg:p-2 flex-1 flex-col items-center justify-center gap-2">
          <p className="text-lg text-center text-slate-600">1 Mes</p>

          <div className="flex gap-1 items-end justify-center">
            <h3 className="text-xl text-center font-black lg:text-2xl">
              {formatPercentage(currentCrypto.market_data?.price_change_percentage_30d)}
            </h3>

            {setIcon(currentCrypto.market_data?.price_change_percentage_30d)}
          </div>
        </div>

      </div>

    </div>
  )
}

export { OverviewCard }