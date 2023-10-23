import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Header = () => {
  const isLogged = useSelector((state) => state.loginReducer.isLogged);
  const dispatch = useDispatch();
  const onLogoutHandler = async () => {
    if (localStorage.getItem("user")) {
      fetch("http://localhost:5000/api/logout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.deletedCount) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("refreshToken");
            dispatch({ type: "LOGOUT" });
          }
        });
    }
  };

  return (
    <header className="header">
      <Container>
        <NavLink to="/">
          <div className="header-logo">Courses App</div>
        </NavLink>
        <div className="header-links">
          {isLogged && (
            <NavLink to="/" exact className="header-link__item">
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
            <>
              <NavLink
                to="/superadmin-admin-pannel"
                className="header-link__item"
              >
                Admin
              </NavLink>
              <button onClick={onLogoutHandler} className="header-link__item">
                Вихід
              </button>
            </>
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
      </Container>
    </header>
  );
};
export default Header;
