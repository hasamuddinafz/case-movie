import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Payment from './components/Payment';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    //dark mode function
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
    }
  }, []);
  
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/'element={<Login/>} />
          <Route path='/login'element={<Login/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/payment'element={<Payment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
