import React from 'react'
import style from '../estilos/wediferent.module.css'
import imgSeccion1 from '../img/icon-snappy-process.png';
import imgSeccion2 from '../img/icon-affordable-prices.png';
import imgSeccion3 from '../img/icon-people-first.png'; 
import imgHearderDesktop from '../img/image-intro-desktop.jpg';
import bgLeftDesktop from '../img/bg-pattern-intro-left-desktop.png';

function Weredifferent() {
  return (
    <div className={style.container}>
        <img src={imgHearderDesktop} alt='img desktop' className={style.imgDesktop}/>
        <img src={bgLeftDesktop} alt='bgleft' className={style.bgLeftDesktop}/>
      <div className={style.linea} >
      </div>

      <h2 className={style.titulo}>
        We’re different
      </h2>

      <div className={style.containerSecciones} >
        
        <div className={style.secciones}>
            <img src={imgSeccion1} alt='seccion' className={style.iconoSeccion}/>
            <h3 className={style.tituloSeccion} >
              Snappy Process
            </h3>
            <p className={style.parrafo}>
              Our application process can be completed in minutes, not hours. Don’t get 
              stuck filling in tedious forms.
            </p>
        </div>

        <div className={style.secciones}>
            <img src={imgSeccion2} alt='seccion' className={style.iconoSeccion}/>
            <h3 className={style.tituloSeccion} >
              Affordable Prices
            </h3>
            <p className={style.parrafo}>
              We don’t want you worrying about high monthly costs. Our prices may be low, 
              but we still offer the best coverage possible.
            </p>
        </div>

        <div className={style.secciones}>
            <img src={imgSeccion3} alt='seccion' className={style.iconoSeccion}/>
            <h3 className={style.tituloSeccion} >
              People First
            </h3>
            <p className={style.parrafo}>
              Our plans aren’t full of conditions and clauses to prevent payouts. We make 
              sure you’re covered when you need it.
            </p>
        </div>
      </div>

    </div>
  )
}

export default Weredifferent