import React from 'react'
import pict3 from '../components/images/last1.png'
import pict4 from '../components/images/last2.png'
import pict5 from '../components/images/intocode.png'
import style from './Footer.module.css'

const Footer = () => {
  console.log(style)
  return (
    <div className={style.footer}>
      <img className={style.pict3} src={pict3} alt="photo" />
      <img className={style.pict4} src={pict4} alt="photo" />
      <div className={style.partners}>Партнерам</div>
      <div className={style.developers}>Разработчикам</div>
      <div className={style.vacation}>Вакансии</div>
      <img className={style.pict5} src={pict5} alt="photo" />
    </div>
  )
}

export default Footer
