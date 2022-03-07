import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Topbar from "./Components/Topbar";
import { ROUTES } from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route element={<Home />} path={ROUTES.HOME} />
        <Route element={<AboutUs />} path={ROUTES.ABOUT} />
        <Route element={<ContactUs />} path={ROUTES.CONTACTUS} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
