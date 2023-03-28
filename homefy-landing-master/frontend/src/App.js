import './App.css';
import Inovacije from './pages/inovacije/Inovacije';
import { Routes, Route, Navigate  } from 'react-router-dom'
import Home from './pages/home/Home'
import { Login } from './pages/log/Login';
import { Signup } from './pages/signup/Signup';
import { useSelector } from 'react-redux';

function App() {

  const { kuca } = useSelector((state) => state.kuca)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup /> } />
      </Routes>
    </div>
  );
}

export default App;
