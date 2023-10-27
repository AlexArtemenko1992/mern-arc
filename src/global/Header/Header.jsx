import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { Link } from "react-scroll";

const Header = () => {
  const [isChangeHeaderStyle, setIsChangeHeaderStyle] = useState(false);
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

  const headerRef = useRef();

  const scrollHandler = () => {
    if (window.pageYOffset > 100) {
      setIsChangeHeaderStyle(true);
      return;
    } else if (window.pageYOffset < 100) {
      setIsChangeHeaderStyle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, false);

    // window.addEventListner("scroll", scrollHandler, false);
    // return () => window.removeEventListner("scroll", scrollHandler, false);
  }, []);

  return (
    <header
      className="header"
      ref={headerRef}
      style={{ background: isChangeHeaderStyle ? "rgba(0,0,0,0.7)" : null }}
    >
      <div className="header-info">
        Старт онлайн курсу "Арбітраж трафіку. З 0 вже розпочато! Курс у запису
        можна замовити вже зараз!
        <Link to="rates" offset={-90}>
          Дізнатися більше
        </Link>
      </div>
      <Container>
        <div className="header-links__wrapper">
          <NavLink to="/">
            <div className="header-logo">
              traffic <br /> <span>arbitration</span>
            </div>
          </NavLink>
          <div className="header-links">
            {/* {isLogged && (
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
            )} */}
            {/* {isLogged && (
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
            )} */}
            {!isLogged && (
              <div className="login-btns__group">
                {/* <NavLink to="/login" className="header-link__item">
                  Вхід
                </NavLink>
                <NavLink to="/registration" className="header-link__item">
                  Регістрація
                </NavLink> */}
                <Link to="info" offset={-150}>
                  Про нас
                </Link>
                <Link to="rates" offset={-90}>
                  Курси
                </Link>
                <Link to="command" offset={-80}>
                  Команда
                </Link>
                <Link to="comments">Відгуки</Link>
                <Link to="faq" offset={-100}>
                  Faq
                </Link>
              </div>
            )}
          </div>
          <button className="header-btn" to="/">
            Записатись на курс
          </button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
