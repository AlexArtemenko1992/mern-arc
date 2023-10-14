import { useSelector } from "react-redux";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isLogged = useSelector((state) => state.loginReducer.isLogged);

  return (
    <header className="header">
      <NavLink to="/" exact>
        <div className="header-logo">Courses App</div>
      </NavLink>
      <div className="header-links">
        {isLogged && (
          <NavLink to="/" exact="true" className="header-link__item">
            Home
          </NavLink>
        )}
        {isLogged && (
          <NavLink to="/profile" className="header-link__item">
            Profile
          </NavLink>
        )}
        {isLogged && (
          <NavLink to="/courses" className="header-link__item">
            Courses
          </NavLink>
        )}
        {isLogged && (
          <NavLink to="/superadmin-admin-pannel" className="header-link__item">
            Admin
          </NavLink>
        )}
        {!isLogged && (
          <div className="login-btns__group">
            <NavLink to="/login" className="header-link__item">
              Вхід
            </NavLink>
            <NavLink to="/registration" className="header-link__item">
              Регістрація
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
