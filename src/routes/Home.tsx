import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import '../styles/index.scss'
import IllustrationWorking from '../public/img/illustration-working.svg'

const Home = () => {
  return (
    <div className="home-container">
      <IllustrationWorking />
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
