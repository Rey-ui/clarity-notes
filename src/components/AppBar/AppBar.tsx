import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectTheme } from "../../redux/notes/selectors";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { changeTheme } from "../../redux/notes/slice";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const AppBar = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <header>
      <div className="container">
        <div>
          <h1>
            <span>C</span>Clarity
          </h1>
          <button type="button" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <IoSunnyOutline />}
          </button>
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
