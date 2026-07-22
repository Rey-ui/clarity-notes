import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import fetchRandomQuote from "./services/other-apis";
import { loginUser, refresh, registerUser } from "./redux/auth/operations";
import { apiLoginUser, apiRegisterUser } from "./services/api";
import type { AppDispatch } from "./redux/store";
import { useDispatch } from "react-redux";
// const data = {
//   name: "qwerty",
//   email: "jfbfribr@gmail.com",
//   password: "dggdgdgdgd",
// };
// const data = {
//   email: "ihfrtttqqiddvrevvrf@gmail.com",
//   password: "347dqwgrereqnd484378378",
// };
function App() {
  const useAppDispatch: () => AppDispatch = useDispatch;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
