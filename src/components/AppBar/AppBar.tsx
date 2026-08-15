import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectTheme } from "../../redux/notes/selectors";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { changeTheme } from "../../redux/notes/slice";

const AppBar = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => {
    dispatch(changeTheme(theme == "light" ? "dark" : "light"));
  };
  return (
    <header>
      <h1>AppBar</h1>
      <button type="button" onClick={toggleTheme}>
        theme
      </button>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
