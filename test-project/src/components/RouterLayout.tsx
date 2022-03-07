import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const RouterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RouterLayout