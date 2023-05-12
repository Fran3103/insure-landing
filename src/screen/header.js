import React from 'react'
import style from '../estilos/header.module.css';
import bgLeftMobile from '../img/bg-pattern-intro-left-mobile.png';
import bgRightMobile from '../img/bg-pattern-intro-right-mobile.png';
import bgRightDesktop from '../img/bg-pattern-intro-right-desktop.png';
import imgHearderDesktop from '../img/image-intro-desktop.jpg';

import imgHeader from '../img/image-intro-mobile.jpg';

import Boton from '../components/Boton';


export default function Header() {
  return (

    <div className={style.contenedorGeneral}>
        <img src={bgRightDesktop} alt='bgRight' className={style.bgRightDesktop}/>
        <div className={style.headerContainer}>
          <img src={imgHeader} alt='img principla' className={style.imgHeader} />
          <img src={imgHearderDesktop} alt='img desktop' className={style.imgDesktop}/>
          
          <img src={bgRightMobile} alt='bgRight' className={style.bgRightMobile} />
          <div className={style.headerTextos}>
            <img src={bgLeftMobile} alt='bgleft' className={style.bgLeftMobile} />
            
            <h1 className={style.titulo}>
              Humanizing your insurance.
            </h1>
            <p className={style.parrafo}>
              Get your life insurance coverage easier and faster. We blend our expertise 
              and technology to help you find the plan that’s right for you. Ensure you 
              and your loved ones are protected.
            </p>
            <Boton/>
            
            
          </div>

        </div>

      </div>
  )
}
