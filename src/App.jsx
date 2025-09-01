import { useEffect, useState } from "react";
import { Layout } from "./components/layout";
import { CustomSelect } from "./components/ui/CustomSelect";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchSelectedCrypto, fetchTopCryptosWithDefault } from "./slices/dataSlice";
import { OverviewCard } from "./components/ui/OverviewCard";
import { HistoricalChartCard } from "./components/ui/HistoricalChartCard";
import { TableCard } from "./components/ui/TableCard";

function App() {
  const dispatch = useDispatch();

  // const loading = useSelector((state) => state.ui.loading);
  const topCryptos = useSelector((state) => state.data.topCryptos, shallowEqual);

  const currentCrypto = useSelector((state) => state.data.currentCrypto);

  const historicalChartData = useSelector((state) => state.data.cryptoHistoricalChartData);

  const [selectedCrypto, setSelectedCrypto] = useState("");

  useEffect(() => {
    dispatch(fetchTopCryptosWithDefault());
  }, [dispatch]);

  // Handles select event and update the state with the selected value.
  const handleCryptoChange = async (event) => {
    setSelectedCrypto(event.target.value);

    if (event.target.value === currentCrypto.id) return;

    dispatch(fetchSelectedCrypto(event.target.value))
  }

  return (
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
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <HistoricalChartCard 
            currentCrypto={currentCrypto} 
            historicalChartData={historicalChartData}
          />
        </div>

        <div className="mt-8">
          <TableCard />
        </div>
        
      </div>
    </Layout>
  );
};

export { App };
