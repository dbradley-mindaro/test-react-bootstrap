import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RouterLayout from './components/RouterLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RouterLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
