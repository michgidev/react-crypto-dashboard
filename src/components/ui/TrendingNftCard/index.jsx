import { useSelector } from "react-redux";
import { formatCurrency } from "../../../utils/formatCurrency";
import { formatPercentage } from "../../../utils/formatPercentage";
import { ArrowIcon } from "../ArrowIcon";

const TrendingNftCard = () => {

  const trendingCryptoData = useSelector((state) => state.data.trendingCryptosData);

  const renderCryptoTendData = (item) => {
    return( 
      <div className="px-2 py-3 flex items-center justify-between border-t border-gray-300" key={item.name}>
        <div className="flex items-center gap-2">
          <img className="w-6 h-6" src={item.thumb} alt={item.name} />
          <p className="text-slate-800">
            { item.name }
          </p>
        </div>

        <div className="grid grid-cols-[auto_1fr] items-center gap-3 xxl:grid-cols-[auto_1fr_1fr]">

          <p className="text-right text-slate-800">
            { formatCurrency(item.data.floor_price) }
          </p>

          <div className="flex items-center justify-end gap-1">
            <ArrowIcon value={item.floor_price_24h_percentage_change} size={16} />
            <p className="text-right text-slate-800">
              { formatPercentage(item.floor_price_24h_percentage_change) }
            </p>
          </div>

          <img className="hidden w-20 h-auto object-contain xxl:block" src={item.data.sparkline} alt={item.name} />
        </div>
      </div>
    )
  };

  return(
    <div className="w-full h-[auto] px-4 pb-4 bg-white rounded-2xl shadow-md shadow-indigo-100 overflow-y-auto relative no-scrollbar md:h-[500px]">

      <h2 className='text-2xl font-bold p-2 pt-6 mb-2 sticky top-0 left-0 bg-white'>
        Trending Nfts
      </h2>

      <div className="p-2 flex items-center justify-between">
        <p className="font-semibold text-slate-800">Nombre</p>

        <div className="grid grid-cols-[auto_60px] items-center gap-3 xxl:grid-cols-[auto_80px_auto]">
          <p className="font-semibold text-right text-slate-800">Precio</p>
          <p className="font-semibold text-right text-slate-800">24h</p>
          <p className="font-semibold text-right text-slate-800 hidden xxl:block">Últimos 7 días</p>
        </div>
      </div>
      
      {trendingCryptoData && trendingCryptoData?.nfts?.map((item) => renderCryptoTendData(item))}

    </div>
  );
};

export { TrendingNftCard };

