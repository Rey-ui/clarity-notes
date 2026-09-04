import { useEffect, useState } from "react";
import fetchRandomQuote from "../../services/other-apis";
import type { ApiQouteResponce } from "../../types/types";
const DailyQuote = () => {
  const [quote, setQuote] = useState<ApiQouteResponce[]>([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const getRandomQuote = async () => {
    try {
      setLoader(true);
      setError(false);
      const result = await fetchRandomQuote();
      setQuote([result]);
    } catch {
      setError(true);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <div>
      <div>
        <h3>Quote</h3>
        <button type="button" onClick={() => getRandomQuote()}>
          new
        </button>
      </div>
      {!loader ? (
        <div>
          {quote.length > 0 && (
            <div>
              <p>{quote[0].quote}</p>
              <h4>--{quote[0].author}</h4>
            </div>
          )}
        </div>
      ) : (
        <p>loading...</p>
      )}
      {error && <p>error</p>}
    </div>
  );
};

export default DailyQuote;
