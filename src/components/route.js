
import {
    Routes,
    Route,
} from "react-router-dom";
import HomeComponent from "./home.js";
import AboutComponent from "./about.js";
import ContactComponent from "./contact.js";

export default function RouteComponent() {
    return <Routes>
        <Route path="/" element={<HomeComponent />}>
        </Route>
        <Route
            path="/home"
            element={<HomeComponent />}
        />
        <Route
            path="/about"
            element={<AboutComponent />}
        />
        <Route
            path="/contact"
            element={<ContactComponent />}
        />
    </Routes>;
}
