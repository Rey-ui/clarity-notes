import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";

const UserMenu = () => {
  const username = useSelector(selectName);

  return (
    <div>
      Welcome, <span>{username}</span>
    </div>
  );
};

export default UserMenu;
