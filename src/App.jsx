import './App.css';
import './bootstrap.min.css';
import Header from './assets/pages/header';
import Footer from './assets/components/footer';
import Home from './assets/pages/home';
import History from './assets/pages/history';
import Landing from './assets/pages/landing';
import Error from './assets/components/error';
import Register from './assets/pages/register';
import Login from './assets/pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  // Initialize user in localStorage if not present
  const user = localStorage.getItem('user');
  if (user === null) {
    localStorage.setItem('user', JSON.stringify({ email: " ", pass: " " }));
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Toaster/>
    </Router>
  );
}

export default App;
