import { useQuery } from "@tanstack/react-query";

const fetchCryptoData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

const useCryptoData = () => {
  return useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
    staleTime: 5 * 60 * 1000, // cache data for 5 mins
  });
};

export default useCryptoData;
