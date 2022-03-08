
import {
  BrowserRouter
} from "react-router-dom";
import RouteComponent from "./components/route.js";
import './App.css';
import NavigationComponent from "./components/navigation.js";
import FooterComponent from "./components/footer.js";


function App() {
  return (
    <BrowserRouter>
      <NavigationComponent />
      <RouteComponent />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
