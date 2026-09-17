import { useEffect, useState } from "react";
import fetchRandomQuote from "../../services/other-apis";
import type { ApiQouteResponce } from "../../types/types";
import { LineWave } from "react-loader-spinner";
import { BsArrowRepeat } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
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
        <h3>
          <FaQuoteRight />
          <span>Quote</span>
        </h3>
        <button type="button" onClick={() => getRandomQuote()}>
          <BsArrowRepeat />
        </button>
      </div>
      {!loader ? (
        <>
          {quote.length > 0 && (
            <div>
              <p>{quote[0].quote}</p>
              <h4>--{quote[0].author}</h4>
            </div>
          )}
        </>
      ) : (
        <LineWave
          visible={true}
          height="50"
          width="50"
          color="#2dd4bf"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      )}
      {error && <p>error</p>}
    </div>
  );
};

export default DailyQuote;
