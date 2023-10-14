import { useSelector } from "react-redux";

import { Header } from "./components";

import AnimatedRoutes from "./global/AnimatedRoutes/AnimatedRoutes";

function App() {
  const isLogged = useSelector((state) => state.loginReducer.isLogged);

  return (
    <div className="App">
      <Header />
      <AnimatedRoutes isLogged={isLogged} />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        {isLogged && <Route path="/courses" element={<CoursesPage />} />}
        {isLogged && (
          <Route path="/superadmin-admin-pannel" element={<AdminPannel />} />
        )}
        <Route path="*" element={<Page404 />} />
      </Routes> */}
    </div>
  );
}

export default App;
