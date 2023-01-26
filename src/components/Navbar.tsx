import React from 'react'
import '../styles/NavbarComponent.scss'

const Navbar = () => {
  return (
    <div>
      <header>
        <h3>Shortly</h3>
        <nav>
          <div className='navbar-links'>
            <a href=''>Features</a>
            <a href=''>Pricing</a>
            <a href=''>Resources</a>
          </div>
          <div className='navbar-buttons'>
            <a href=''>Login</a>
            <button>Sign Up</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
