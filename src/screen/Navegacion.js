import React, { useState } from 'react';
import style from '../estilos/nav.module.css';
import logo from '../img/logo.png';
import logoMenu from '../img/icon-hamburger.png';
import logoClose from '../img/icon-close.png';
import bgMenu from '../img/bg-pattern-mobile-nav.png';
import Boton from '../components/Boton';
import BotonDesktop from '../components/BotonDesktop'
function Navegacion() {
  const [navOpen, setNavOpen] = useState(false);
  
  const links =[ 
    {
      id : '1',
      link: 'HOWWEWORK',
    },
    {
      id : '2',
      link: 'BLOG',
    },
    {
      id: '3',
      link:'ACCOUNT',
    },
  ]
  return (
    <div className={style.contenedorGeneral}>
      <div className={navOpen === false ? style.navContainer : style.navOpen}> 
        <img className={style.logo} src={logo} alt="logo" />
        {navOpen && 
        <ul className={style.navLista}>
        {links.map((x) => (
          
            <i key={x.id} className={style.link}> { x.link === "HOWWEWORK" ? "HOW WE WORK" : x.link } </i>
            
          
          ))}
          <Boton/>
          <img src={bgMenu} alt='bg menu' className={style.bgMenu} />

        </ul>
      }
      <div className={style.menuDesktop} >
      <ul className={style.navListaDesktop}>
        {links.map((x) => (
          
            <i key={x.id} className={style.link}> { x.link === "HOWWEWORK" ? "HOW WE WORK" : x.link } </i>
            
          
          ))}
          <BotonDesktop/>
         

        </ul>
      </div>
      {!navOpen ? (<img src={logoMenu} className={style.logoMenu} alt="menu" onClick={()=>setNavOpen(!navOpen)} />) : (
        <img src={logoClose} alt="cerrar" onClick={()=> setNavOpen(!navOpen)}/>)
        }
      </div>
    </div>
  )
}



export default Navegacion