import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../hooks";
import { logoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const username = useSelector(selectName);
  const dispatch = useAppDispatch();
  return (
    <div>
      Welcome, <span>{username}</span>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        logout
      </button>
    </div>
  );
};

export default UserMenu;
