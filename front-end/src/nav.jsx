import React,{useState,useEffect} from 'react'
import "./nav.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faBars,faXmark,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { red,green,blue,opacity } from './colors'


export default function Nav(props) {
    const [menudisplay,setdisplay]=useState(-400)
    function menu() {
        if (menudisplay===-400) {
          setdisplay(0)
        } else {
          setdisplay(-400)
        }
    }

    const ratio=0.1
  const options={
    root:null,
    rootMargin:"0px",
    threshold: 0.1,
  }
  function visible(entries,observer) {
   entries.forEach(entry => {
    if (entry.intersectionRatio>ratio) {
      entry.target.classList.add("visible")
      observer.unobserve(entry.target)
    }
   });
  }
 useEffect(() => {
   const observer=new IntersectionObserver(visible,options)
   document.querySelectorAll('[class*="invisible"]').forEach(r=>{
    observer.observe(r)
   })
    
 },[]);
    return (
      <section>
      <nav className='navbars invisible1'>
          <div className='logo'>
              <img src="devkan.png" alt="" />
          </div>
          
          <div className='nav invisible2'>
           <a href="https://wa.me/+22968364255" className='invisible6' ><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize:20,marginRight:5}}/><span>+22968364255</span></a>
           <a href="mailto:abnegko@gmail.com"  className='invisible7'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize:15,marginRight:14}}/><span>abnegko@gmail.com</span></a>
         
             {/* <a href="/" onClick={props.clickhome} className='lienhome'><FontAwesomeIcon icon={faHome} style={{ fontSize:15,paddingLeft:15,paddingRight:15,cursor:"pointer"}} className='home'/></a>
              <a href="/" onClick={props.clickservice} className='lienservices'>Services</a>
              <a href="/" onClick={props.clickcompetences} className='liencompetences'>Competences</a>
              <a href="/" onClick={props.clickportofolio} className='lienportofolio' >Portofolio</a>
              <a href="/" onClick={props.clicktarifs} className='lientarifs'>Tarifs</a>
              <a href="/" onClick={props.clickapropos} className='lienapropos'>A propos</a>
              <a href="/" onClick={props.clickcontact} className='liencontact'>Contact</a>*/}
          </div>
           
          <FontAwesomeIcon onClick={menu} icon={faBars} className='btn-menu invisible9' style={{marginLeft:35,cursor:"pointer",color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}/>
      </nav>
      <div className='menu' style={{marginRight:`${menudisplay}px`}}>
              <div style={{textAlign:'left'}}><FontAwesomeIcon  onClick={menu} icon={faXmark}  style={{ fontSize:30,marginLeft:16,cursor:"pointer",color:"white"}}/></div>
              <div className='navigation'>
                <h5>A PROPOS</h5>
                <hr />
                <h6>Developpeur web fullstack &  d'application mobile.</h6>
                <p>N'hesitez pas à me contacter pour tout type de projet de création de site internet , d'appliction web et d'application mobile.</p>
                <button onClick={props.clicksavoir}>EN SAVOIR PLUS</button>
                <h5>NAVIGUATION</h5>
                <hr/>
                <a href="/" onClick={props.navacceuil}><FontAwesomeIcon icon={faChevronRight}/> Acceuil</a>
                <a href="/" onClick={props.navservice}><FontAwesomeIcon icon={faChevronRight}/> Service</a>
                <a href="/" onClick={props.navcompetence}><FontAwesomeIcon icon={faChevronRight}/> Compétences</a>
                <a href="/" onClick={props.navportofolio}><FontAwesomeIcon icon={faChevronRight}/> Portofolio</a>
                <a href="/" onClick={props.navtarifs}><FontAwesomeIcon icon={faChevronRight}/> Tarifs</a>
                <a href="/" onClick={props.navapropos}><FontAwesomeIcon icon={faChevronRight}/> A propos</a>
                <a href="/" onClick={props.navcontact}><FontAwesomeIcon icon={faChevronRight}/> Contact</a>
              </div>
      </div>
      </section>
    )
  }