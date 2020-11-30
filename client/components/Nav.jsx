import React from 'react'
import { Link } from 'react-router-dom'

import { logOut } from './navHelper'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav (props) {
  const currentPage = props.location.pathname
  let navLinks = null

  switch (currentPage) {
    case '/signin':
      navLinks = (
        <>
          <Link to="/register">Register</Link>
          <Link to="/">Home</Link>
        </>
      )
      break
    case '/register':
      navLinks = (
        <>
          <Link to="/signin">Sign in</Link>
          <Link to="/">Home</Link>
        </>
      )
      break
    default:
      navLinks = (
        <>
          <Link to="/signin">Sign in</Link>
          <Link to="/register">Register</Link>
        </>
      )
  }

  return (
    <nav className="navbar">
      <IfAuthenticated>
        <Link to="/" onClick={logOut}>
            Log out
        </Link>
        <Link to="/">Home</Link>
      </IfAuthenticated>
      <IfNotAuthenticated>{navLinks}</IfNotAuthenticated>
    </nav>
  )
}

export default Nav
