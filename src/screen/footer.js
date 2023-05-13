import React from "react";
import style from '../estilos/footer.module.css'
import logoFooter from '../img/logo.png';
import insta from '../img/icon-instagram.png';
import face from '../img/icon-facebook.png';
import tw from '../img/icon-twitter.png';
import pinteres from '../img/icon-pinterest.png';
import bgFooterMobile from '../img/bg-pattern-footer-mobile.png';

const linksCompany = [
    {
        id: '1',
        link: 'How we work',
    },
    {   
        id:'2',
        link: 'Why Insure?',

    },
    {
        id:'3',
        link: 'View plans',
    },
    {
        id:'4',
        link: 'Reviews',
    }
]

const linksHelp = [
    {
        id: '1',
        link: 'FAQ',
    },
    {   
        id:'2',
        link: 'Terms of use',

    },
    {
        id:'3',
        link: 'Privacy policy',
    },
    {
        id:'4',
        link: 'Cookies',
    }
]

const linksContact = [
    {
        id: '1',
        link: 'Sales',
    },
    {   
        id:'2',
        link: 'Support',

    },
    {
        id:'3',
        link: 'Live chat',
    },
    
]

const linksOthers= [
    {
        id: '1',
        link: 'Careers',
    },
    {   
        id:'2',
        link: 'Press',

    },
    {
        id:'3',
        link: 'Licenses',
    },
    
]


function Footter (){
    return (

        <div className={style.containerFooter} >
            <img src={bgFooterMobile} alt="img footer" className={style.bgFooterMobile}/>
            <div className={style.logosContainer}>
                <img className="logo" src={logoFooter} alt="logo"/>
                <div className={style.redes} >
                    <img src={face}  alt="facebook"/>
                    <img src={tw} alt="twitter"/>
                    <img src={pinteres} alt="pinteres"/>
                    <img src={insta} alt="instagram"/>
                </div>
            </div>

            
            <div className={style.linea}></div>

            <div className={style.containerListas}>
            
                <div className={style.companyContainer}>
                                    <h3>
                                        OUR COMPANY
                                    </h3>
                                    <ul className={style.listaCompany}>
                                        {
                                            linksCompany.map((x) => (
                                                <i  key={x.id} className={style.link}>
                                                    {
                                                        x.link
                                                    }
                                                </i>
                                            ))
                                        }

                                    </ul>
                    </div>

                <div className={style.helpContainer}>
                        <h3>
                            HELP ME
                        </h3>
                        <ul className={style.listaHelp}>
                            {
                                linksHelp.map((x) => (
                                    <i key={x.id} className={style.link}>
                                        {
                                            x.link
                                        }
                                    </i>
                                ))
                            }

                        </ul>
                    </div>
                    
                <div className={style.contactContainer}>
                        <h3>
                            CONTACT
                        </h3>
                        <ul className={style.listaContact}>
                            {
                                linksContact.map((x) => (
                                    <i key={x.id} className={style.link}>
                                        {
                                            x.link
                                        }
                                    </i>
                                ))
                            }

                        </ul>
                    </div>
                
                <div className={style.othersContainer}>
                        <h3>
                            OTHERS
                        </h3>
                        <ul className={style.listaOthers}>
                            {
                                linksOthers.map((x) => (
                                    <i key={x.id} className={style.link}>
                                        {
                                            x.link
                                        }
                                    </i>
                                ))
                            }

                        </ul>
                    </div>

            

            </div>
        </div>
    )
}



export default Footter