import React from 'react'
import Tesla from './../assets/tesla.jpg'
import './Home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
        <img src={Tesla} alt="" className="home-bg"/>
        <NavLink className="action-btn" to="/articles">
            Explore
        </NavLink>
    </div>
  )
}

export default Home
