import React from 'react'
import style from "./NavBar.module.css"
import logo from  "../../Image/logo.png"

function NavBar() {
  return (
    <div className={style.main}>
        <div className={style.leftPart}>
        <img src={logo} alt='logo' />
      <ul>
        <li>How it works</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
        </div>
   
      <div className={style.btns}>
        <button>Sign up</button>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar
