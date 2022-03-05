import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./components/header";

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
