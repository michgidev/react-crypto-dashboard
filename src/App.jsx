import { useEffect, useState } from "react";
import { Layout } from "./components/layout";
import { CustomSelect } from "./components/ui/CustomSelect";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchSelectedCrypto, fetchTopCryptosWithDefault } from "./slices/dataSlice";
import { OverviewCard } from "./components/ui/OverviewCard";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.ui.loading);

  const topCryptos = useSelector((state) => state.data.topCryptos, shallowEqual);

  const currentCrypto = useSelector((state) => state.data.currentCrypto);

  const [selectedCrypto, setSelectedCrypto] = useState("");

  useEffect(() => {
    dispatch(fetchTopCryptosWithDefault());
  }, [dispatch]);

  // Handles select event and update the state with the selected value.
  const handleCryptoChange = async (event) => {
    setSelectedCrypto(event.target.value);

    dispatch(fetchSelectedCrypto(event.target.value))

    console.log('Selected crypto value', event.target.value);
  }

  return (
    <Layout>
      <div className="lg:p-4">

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
        
      </div>
    </Layout>
  );
};

export { App };
