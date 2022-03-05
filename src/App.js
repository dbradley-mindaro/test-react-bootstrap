import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Header from './Components/Header'
import Home from './Pages/Home'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        {/* Routing */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={ContactUs} exact />
        </Switch>
        {/* <Route path="/contact" component={Contact} exact /> */}
      </BrowserRouter>
      {/* <Header/> */}
    </>
  )
}

export default App
