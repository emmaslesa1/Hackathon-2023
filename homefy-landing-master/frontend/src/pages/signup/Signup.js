import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'
import classes from './signup.module.css'
import {useDispatch} from 'react-redux'
import { signup } from '../../redux/kucaSlice'

export const Signup = () => {

const [naziv, setNaziv] = useState("")
  const [key, setKey] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async(e) => {
    e.preventDefault()

    if(naziv === "" || key === "") return

    try {
      const options = {
        'Content-Type': 'application/json'
      } 


      const data = await request("/kuca/signup", 'POST', options, {naziv,key})
      console.log(data)
      dispatch(signup(data))
      navigate('/login')
      window.location.replace('https://www.google.com/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Signup Home</h2>
        <form onSubmit={handleSignup}>
        <input type="text" placeholder='Naziv...' onChange={(e) => setNaziv(e.target.value)} />
          <input type="password" placeholder='Key...' onChange={(e) => setKey(e.target.value)} />
          <button type="submit" className={classes.btn}>Signup Home</button>
          <p>Already have an account?<Link to='/login'>Login Home</Link></p>
        </form>
      </div>
    </div>
  )
}