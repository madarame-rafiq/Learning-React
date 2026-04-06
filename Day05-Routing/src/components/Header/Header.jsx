import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='about'>
                <li>About</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
            <Link to='/github'>
                <li>Github</li>
            </Link>
        </ul>
    </div>
  )
}

export default Header