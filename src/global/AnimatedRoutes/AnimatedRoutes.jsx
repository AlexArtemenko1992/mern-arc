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

  const [isLoaded, setIsLoaded] = useState(true);

  const timer = useRef(
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000)
  );

  useEffect(() => {
    console.log(isLoaded);
    return () => clearInterval(timer);
  }, [isLoaded]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          exact
          element={!isLoaded ? <Preloader /> : <HomePage />}
          // element={<HomePage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        {isLogged && <Route path="/courses" element={<CoursesPage />} />}
        {isLogged && (
          <Route path="/superadmin-admin-pannel" element={<AdminPannel />} />
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
