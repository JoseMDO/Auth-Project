import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {
  return (
    <div className='navbar'>
        <span className='logo'>
            <Link className='link' to="/">Lama App</Link>
        </span> {
            user ? (
                <ul className='list'>
                    <li className='listItem'>
                        <img src="" alt="" className="avatar" />
                    </li>
                    <li className='listItem'>
                        John Doe
                    </li>
                    <li className='listItem'>
                        Logout
                    </li>
                </ul>
            ) : (
                <Link to="/login" className='link'>
                    Login
                </Link>
            )
        }
    </div>
  )
}

export default Navbar