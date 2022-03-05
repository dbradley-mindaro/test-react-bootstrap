import React from "react";
import routes from "../routes";
import NavbarComp from "../components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Landing(props) {
  return (
    <>
      <NavbarComp {...props} />
      <Routes>
        {routes.map(({ name, path, Component }) => {
          return <Route path={path} element={<Component />} key={name} />;
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default Landing;
