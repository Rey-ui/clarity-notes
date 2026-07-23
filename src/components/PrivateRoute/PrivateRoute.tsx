import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

interface PropsTypes {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: PropsTypes) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
