import React from 'react'
import pict from './images/0.png'
const Main = () => {
  return (
    <div className="headerDiv2">
      <img className="zero" src={pict} alt="" />
      <div className="incrdecrethrow">
        <div className="increase">Увеличить</div>
        <div className="decrease">Уменьшить</div>
        <div className="throw">Сбросить</div>
      </div>
    </div>
  )
}

export default Main
