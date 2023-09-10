import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Price from './pages/Price'
import Blog from './pages/Blog';
import QA from './pages/QA';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pris' element={<Price />} />
        <Route path='/blogg' element={<Blog />} />
        <Route path='/Q&A' element={<QA />} />
        <Route path='/kontakt' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
