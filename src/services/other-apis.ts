import axios from "axios";
import type { ApiQouteResponce } from "../types/types";
const API_KEY = "2UKCk9pixBmtIKB84OmVSw3DfYYwONBI2cGlvtxU";

async function fetchRandomQuote(): Promise<ApiQouteResponce> {
  const responce = await axios.get<ApiQouteResponce[]>(
    "https://api.api-ninjas.com/v2/randomquotes?categories=wisdom",
    {
      headers: {
        "X-Api-Key": API_KEY,
      },
    },
  );
  console.log(responce.data);
  return responce.data[0];
}

export default fetchRandomQuote;
