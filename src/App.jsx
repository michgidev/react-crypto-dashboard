import { useEffect, useState } from "react";
import { Layout } from "./components/layout";
import { CustomSelect } from "./components/ui/CustomSelect";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchSelectedCrypto, fetchTopCryptosWithDefault } from "./slices/dataSlice";
import { OverviewCard } from "./components/ui/OverviewCard";
import { HistoricalChartCard } from "./components/ui/HistoricalChartCard";
import { TableCard } from "./components/ui/TableCard";
import { TrendingCryptoCard } from "./components/ui/TrendingCryptoCard";
import { TrendingNftCard } from "./components/ui/TrendingNftCard";
import { Loader } from "./components/ui/Loader";
import { CustomModal } from "./components/ui/CustomModal";
import { setIsModalOpen } from "./slices/uiSlice";
import { CryptoDetailCard } from "./components/ui/CryptoDetailCard";
import { NftDetailCard } from "./components/ui/NftDetailCard";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.ui.loading);

  const isModalOpen = useSelector((state) => state.ui.isModalOpen);

  const topCryptos = useSelector((state) => state.data.topCryptos, shallowEqual);

  const currentCrypto = useSelector((state) => state.data.currentCrypto);

  const historicalChartData = useSelector((state) => state.data.cryptoHistoricalChartData);

  const [selectedCrypto, setSelectedCrypto] = useState("");

  const [cryptoDetails, setCryptoDetails] = useState({});

  useEffect(() => {
    dispatch(fetchTopCryptosWithDefault());
  }, [dispatch]);

  // Handles select event and update the state with the selected value.
  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);

    if (event.target.value === currentCrypto.id) return;

    dispatch(fetchSelectedCrypto(event.target.value))
  }

  // Handles click from trending cards
  const handleCryptoClick = (item) => {
    setCryptoDetails(item);
    dispatch(setIsModalOpen(true));
  }

  return (
    <>
      {
        loading ?
        <Loader/> 
        
        :
        
        <Layout>
          <div className="main-wrapper">

            {/* Overview card and select */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row"> 
              <div className="order-2 lg:flex-2 lg:order-1">
                <OverviewCard currentCrypto={currentCrypto}/>
              </div>
              
              <CustomSelect
                optionsList={topCryptos} 
                value={selectedCrypto}  
                onChange={handleCryptoChange}
                className="order-1 min-w-full lg:order-2 lg:min-w-48"
              />
            </div>

            {/* Historical chart card */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

              <div className="md:col-span-2 xl:col-span-1">
                <HistoricalChartCard 
                  currentCrypto={currentCrypto} 
                  historicalChartData={historicalChartData}
                />
              </div>
              
              <div>
                <TrendingCryptoCard showItemDetail={handleCryptoClick} />
              </div>

              <div>
                <TrendingNftCard showItemDetail={handleCryptoClick}/>
              </div>
            </div>

            <div className="mt-6">
              <TableCard />
            </div>
            
          </div>

          {/* Modal */}
          {
            (isModalOpen && cryptoDetails) && (
              <CustomModal>
                { cryptoDetails.type === "coin" ? 
                  <CryptoDetailCard data={cryptoDetails} />
                  :
                  <NftDetailCard data={cryptoDetails} />
                }
              </CustomModal>
            )
          }
        </Layout>
      }
    </>
  );
};

export { App };
