import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Preloader } from "../../components";
import {
  HomePage,
  LoginPage,
  RegistrationPage,
  CoursesPage,
  AdminPannel,
  Page404,
} from "../../pages";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = ({ isLogged }) => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  const timer = useRef(
    setTimeout(() => {
      setIsLoaded(true);
    }, 500)
  );

  useEffect(() => {
    return () => clearInterval(timer);
  }, [isLoaded]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/mern-arc/"
          exact
          element={!isLoaded ? <Preloader /> : <HomePage />}
          // element={<HomePage />}
        />
        <Route
          path="/login"
          element={!isLoaded ? <Preloader /> : <LoginPage />}
        />
        <Route
          path="/registration"
          element={!isLoaded ? <Preloader /> : <RegistrationPage />}
        />
        {isLogged && (
          <Route
            path="/courses"
            element={!isLoaded ? <Preloader /> : <CoursesPage />}
          />
        )}
        {isLogged && (
          <Route
            path="/superadmin-admin-pannel"
            element={!isLoaded ? <Preloader /> : <AdminPannel />}
          />
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
