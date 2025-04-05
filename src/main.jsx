import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import About from './pages/About.jsx';
import Offers from './pages/Offers.jsx';
import Seats from './pages/Seats.jsx';
import Destinations from './pages/Destinations.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
