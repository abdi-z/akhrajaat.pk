import React from 'react'
import './Navbar.css'
import coins from './coins.svg'
import 'animate.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='animate__animated animate__bounce nav'>
        <div className='title'>
            <img src={coins} width='40'/>
            <h1>Akhrajaat.pk</h1>
        </div>
        <ul className='nav-items'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </ul>
    </nav>
  )
}
