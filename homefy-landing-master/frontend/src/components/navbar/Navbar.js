import './navbar.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/kucaSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { kuca } = useSelector((state) => state.kuca)

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

const handleScroll = () => {
  window.scrollTo(0,0)
}

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const [isActive, setIsActive] = useState("#");
  return (
    <nav>
      <Link to='/' className='active' onClick={handleScroll}>HomeFy</Link>
      <div className='center'>
        <a href='#innovation' className='active'>Innovations</a>
        <Link to='/login' className='dash'>Dashboard</Link>
      </div>
      
    </nav>
  )
}



export default Navbar