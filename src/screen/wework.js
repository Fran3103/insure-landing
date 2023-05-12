import React from 'react';
import style from '../estilos/wework.module.css';
import bgFondo from '../img/bg-pattern-how-we-work-mobile.png';
function Wework() {
  return (
    <div className={style.container}>
        <img src={bgFondo} alt='fondo' className={style.fondo}/>
        <p className={style.titulo}>
          Find out more about how we work
        </p>
        <button className={style.boton}>
            HOW WE WORK
        </button> 
    </div>
  )
}

export default Wework