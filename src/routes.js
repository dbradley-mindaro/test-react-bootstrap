import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";

var routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/contant-us",
    name: "Contact Us",
    Component: Contact,
  },
];

export default routes;
