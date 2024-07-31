import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/login" className={css.loginLink}>
        Login
      </NavLink>
      <NavLink to="/register" className={css.loginLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;