import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Header } from "./components";

import AnimatedRoutes from "./global/AnimatedRoutes/AnimatedRoutes";
import Footer from "./global/Footer/Footer";
import { useEffect } from "react";

import Preloader from "./global/Preloader/Preloader";

function App() {
  const isLogged = useSelector((state) => state.loginReducer.isLogged);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      fetch("http://localhost:5000/api/refresh", {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          refreshToken: localStorage.getItem("refreshToken"),
        },
      })
        .then((res) => {
          setIsLoading(true);
          return res.json();
        })
        .then((res) => {
          if (res.user) {
            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("token", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch({ type: "LOGIN", payload: JSON.stringify(res.user) });
            setIsLoading(false);
            console.log(navigate);
            // navigate("/courses");
          }
          if (res.message) {
            setIsLoading(false);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            navigate("/");
          }
        });
    }
  }, []);

  useEffect(() => {
    navigate(JSON.parse(window.sessionStorage.getItem("lastRoute") || "{}"));
    window.onbeforeunload = () => {
      window.sessionStorage.setItem(
        "lastRoute",
        JSON.stringify(window.location.pathname)
      );
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <AnimatedRoutes isLogged={isLogged} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
