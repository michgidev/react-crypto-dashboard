import { useSelector } from "react-redux";
import { formatCurrency } from "../../../utils/formatCurrency";
import { formatPercentage } from "../../../utils/formatPercentage";
import { ArrowIcon } from "../ArrowIcon";

// Return the format for every element in the list
const renderCryptoTrendData = ({item}, handleItemClick) => {
  return( 
    <div 
      className="px-2 py-3 flex items-center justify-between border-b 
      cursor-pointer border-gray-300 dark:border-slate-700" 
      key={item.name}
      onClick={() => handleItemClick(item)}
    >

      <div className="flex items-center gap-2">
        <img className="w-6 h-6" src={item.small} alt={item.name} />
        <p className="text-slate-800 dark:text-gray-200">
          { item.name }
        </p>
      </div>

      <div className="grid grid-cols-[auto_1fr] items-center gap-3 xxl:grid-cols-[auto_1fr_1fr]">

        <p className="text-right text-slate-800 dark:text-gray-200">
          { formatCurrency(item.data.price) }
        </p>

        <div className="flex items-center justify-end gap-1">
          <ArrowIcon value={item.data.price_change_percentage_24h?.usd} size={16} />
          <p className="text-right text-slate-800 dark:text-gray-200">
            { formatPercentage(item.data.price_change_percentage_24h?.usd) }
          </p>
        </div>

        <img className="hidden w-20 h-auto object-contain xxl:block" src={item.data.sparkline} alt={item.name} />
      </div>
    </div>
  )
};

const TrendingCryptoCard = ({showItemDetail}) => {
 
  const trendingCryptoData = useSelector((state) => state.data.trendingCryptosData);

  const handleItemClick = (item) => {
    showItemDetail({...item, type: 'coin'})
  }

  return(
    <div className="w-full h-[auto] px-4 pb-4 bg-white rounded-2xl shadow-md shadow-indigo-100 
      overflow-y-auto relative no-scrollbar md:h-[500px] dark:bg-slate-800 dark:shadow-slate-900">

      <h2 className="text-2xl font-bold p-2 pt-6 sticky 
        top-0 left-0 bg-white dark:bg-slate-800 dark:text-gray-100">
        Trending Coins
      </h2>

      <div className="p-2 flex items-center justify-between sticky border-b 
        top-[64px] bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700">

        <p className="font-semibold text-slate-800 dark:text-gray-300">Nombre</p>

        <div className="grid grid-cols-[auto_60px] items-center gap-3 xxl:grid-cols-[auto_80px_auto]">
          <p className="font-semibold text-right text-slate-800 dark:text-gray-300">Precio</p>
          <p className="font-semibold text-right text-slate-800 dark:text-gray-300">24h</p>
          <p className="font-semibold text-right text-slate-800 dark:text-gray-300 hidden xxl:block">Últimos 7 días</p>
        </div>
      </div>
      
      {/* Iterate over coins list to render elements */}
      {trendingCryptoData && trendingCryptoData?.coins?.map((item) => 
        renderCryptoTrendData(item, handleItemClick)
      )}

    </div>
  );
};

export { TrendingCryptoCard };

