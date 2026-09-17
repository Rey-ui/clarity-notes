import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../hooks";
import { logoutUser } from "../../redux/auth/operations";
import { RxEnter } from "react-icons/rx";

const UserMenu = () => {
  const username = useSelector(selectName);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <span>Hello, </span>
        <span>{username}</span>
      </div>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        <RxEnter />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default UserMenu;
