import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import fetchRandomQuote from "./services/other-apis";

function App() {
  // useEffect(() => {
  //   async function getRandomQuote() {
  //     const result = await fetchRandomQuote();
  //     console.log(result);
  //   }
  //   getRandomQuote();
  // }, []);
  return (
    <>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
