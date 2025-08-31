const COINGECKO_URL = 'https://api.coingecko.com/api/v3/';

const options = {
  method: 'GET',
  headers: { 
    accept: 'application/json', 
  }
};

// Fetch top 10 crypto by market cap value
const getTopCryptos = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`, 
      options
    );

    if(!response.ok) throw new Error(response.status);

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

// Fetch crypto data by id(param)
const getCryptoDataByID = async (id) => {
  try {
    const response = await fetch(
      `${COINGECKO_URL}coins/${id}`,
      options
    );

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export { getTopCryptos, getCryptoDataByID }