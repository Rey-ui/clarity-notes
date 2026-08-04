import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { refresh } from "./redux/auth/operations";
import type { AppDispatch } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Toaster } from "react-hot-toast";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const NotesPage = lazy(() => import("./pages/NotesPage/NotesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
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
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <p>refreshing user...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/notes"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/notes"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/notes"
              element={
                <PrivateRoute redirectTo="/login" component={<NotesPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
}

export default App;
