import { useEffect, useState } from "react";
import { Layout } from "./components/layout";
import { CustomSelect } from "./components/ui/CustomSelect";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchSelectedCrypto, fetchTopCryptosWithDefault } from "./slices/dataSlice";

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

        <div className="flex items-center justify-between">

          <h1 className=" text-2xl font-bold">{currentCrypto.name}</h1>
          
          <CustomSelect
            optionsList={topCryptos} 
            value={selectedCrypto}  
            onChange={handleCryptoChange}
          />

        </div>

      </div>
    </Layout>
  );
};

export { App };
