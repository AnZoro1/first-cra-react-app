import React from 'react'
import pict from '../components/images/ounter.png'
import pict2 from '../components/images/elips.png'

const Header = () => {
  return (
    <div className="headerDiv">
      <img className="pict2" src={pict2} alt="photo" />
      <img className="pict" src={pict} alt="Photo" />
      <div className="menu_main">
        <a href="">Главное</a>
      </div>

      <div className="menu_aboutUs">
        {' '}
        <a href="">О нас</a>{' '}
      </div>
      <div className="menu_contacts">
        {' '}
        <a href="">Контакты</a>{' '}
      </div>
    </div>
  )
}
export default Header
