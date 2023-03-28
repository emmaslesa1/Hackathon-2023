import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'
import classes from './login.module.css'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/kucaSlice'

export const Login = () => {

  const [key, setKey] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    if(key === "") return

    try {
      const options = {
        'Content-Type': 'application/json'
      } 


      const data = await request("/kuca/login", 'POST', options, {key})
      console.log(data)
      dispatch(login(data))
      window.location.replace('https://www.google.com/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login Home</h2>
        <form onSubmit={handleLogin}>
          <input type="password" placeholder='Key...' onChange={(e) => setKey(e.target.value)} />
          <button type="submit" className={classes.btn}>Login Home</button>
          <p>Don't have an account? <Link to='/signup'>Signup Home</Link></p>
        </form>
      </div>
    </div>
  )
}