import axios from "axios";

const API_KEY = "fHXLDo5Kjen5sQGC30ZoXMO3PBW1MsnyGaB7qpTs";
interface ApiResponce {
  quote: string;
  author: string;
  category: string;
}
async function fetchRandomQuote(): Promise<ApiResponce[]> {
  const responce = await axios.get<ApiResponce[]>(
    "https://api.api-ninjas.com/v2/randomquotes?categories=wisdom",
    {
      headers: {
        "X-Api-Key": API_KEY,
      },
    },
  );
  return responce.data;
}

export default fetchRandomQuote;
