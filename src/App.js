import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Price from './pages/Price'
import Blog from './pages/Blog';
import QA from './pages/QA';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pris' element={<Price />} />
        <Route path='/blogg' element={<Blog />} />
        <Route path='/Q&A' element={<QA />} />
        <Route path='/kontakt' element={<Contact />} />
        <Route path='/inloggning' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      {/* IF NEW PATHNAME, SCROLL TO TOP */}
      <ScrollToTop />
    </div>
  );
}

export default App;
