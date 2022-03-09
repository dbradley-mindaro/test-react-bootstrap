import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
