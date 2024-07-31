import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserManu = () => {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.userNav}>
      <span className={css.userName}>Welcome, {userInfo?.name}</span>
      <button
        type="button"
        className={css.logoutBtn}
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserManu;