import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
