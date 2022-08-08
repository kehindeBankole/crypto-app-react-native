import axios from "axios";
import { useQuery } from "react-query";
import { Coins } from "../types";
import { makeApiCall } from "../utils/api";
async function geta() {
  const a = await makeApiCall<Coins[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=3&sparkline=false");
  return a;
}
export function useCoins() {
  const query = useQuery("coinsss", geta)
  return query
}
