import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import '../styles/index.scss'

const Home = () => {
  const searchIcon: string = require('../public/img/illustration-working.svg').default

  return (
    <div className="home-container">
      <img src={searchIcon}></img>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <ButtonComponent />
    </div>
  )
}

export default Home
