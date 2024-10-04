import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faThumbsUp,faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faLinkedin,faSkype} from '@fortawesome/free-brands-svg-icons';
import "./header.css"


export default function Header() {
  const ratio=0.1
  const options={
    root:null,
    rootMargin:"0px",
    threshold: ratio,
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
      <header>
         <div className='reseau'>
           <FontAwesomeIcon icon={faFacebook} style={{ fontSize:20,marginLeft:35,cursor:"pointer"}}  className='invisible1'/>
           <FontAwesomeIcon icon={faInstagram} style={{ fontSize:20,marginLeft:35,cursor:"pointer"}}  className='invisible2'/>
           <FontAwesomeIcon icon={faLinkedin} style={{ fontSize:20,marginLeft:35,cursor:"pointer"}}  className='invisible3'/>
           <FontAwesomeIcon icon={faSkype} style={{ fontSize:20,marginLeft:35,cursor:"pointer"}}  className='invisible4'/>
           <a href="/" className='invisible5' ><FontAwesomeIcon icon={faThumbsUp} style={{ fontSize:15,marginRight:10}}/><span>566</span></a>
         </div>
         <div className='contact'>
           <a href="tel:+22968364255" className='invisible6' ><FontAwesomeIcon icon={faPhone} style={{ fontSize:15,marginRight:14}}/><span>+22968364255</span></a>
           <a href="mailto:abnegko@gmail.com"  className='invisible7'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize:15,marginRight:14}}/><span>abnegko@gmail.com</span></a>
         </div>
      </header>
    )
  }
