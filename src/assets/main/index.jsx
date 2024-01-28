import React from 'react'
import "./index.css"

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main__text">
            <h2>Love and kindness are never wasted.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button>Join Us</button>
        </div>
        <div className="main__img">
          <img src="../public/img.png" alt="" />
        </div>
      </div>
    </>
  )
}
