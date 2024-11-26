import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
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
