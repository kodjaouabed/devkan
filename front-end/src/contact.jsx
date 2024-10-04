import React,{useState,useEffect,useRef} from 'react'
import "./contact.css"
import { colors } from './colors'
import axios from "axios"
import { red,green,blue,opacity } from './colors'
import emailjs from '@emailjs/browser';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faMailBulk,faLock,faLocationDot,faLink,faClock} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope,faPhone,} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'




export default function Contact({reference}) {

  const form = useRef();

  


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

    const [nom_prenom,setnomPrenom]=useState(null)
    const [email,setEmail]=useState(null)
    const [telephone,setTel]=useState(null)
    const [message,setMessage]=useState(null)
    const [condition,setCondition]=useState(null)
    const [verification,setVerification]=useState(null)
    function nom(e) {
      if (e.target.name==="nom") {
        setnomPrenom(e.target.value)
      }
      if(e.target.name==="email"){
        setEmail(e.target.value)
      }
      if(e.target.name==="telephone"){
         setTel(e.target.value)
      }
      if(e.target.name==="message"){
        setMessage(e.target.value)
     }
     if(e.target.name==="acceptcheckbox"){
      setCondition(e.target.checked)
    }
    if(e.target.name==="verification"){
      setVerification(e.target.value)
    }
    }
    
    function affichag(e) {
      e.preventDefault()
       if (nom_prenom!==null && email!==null && telephone!==null &&  message!==null && verification!==null  && condition!==null) {
        if (condition===true) {
          if (verification==="9") {
            emailjs
           .sendForm('service_hgueuty', 'template_lk2cslh', form.current, {
           publicKey: 'YPTrEdIFmeTfZ3JQW',
         })
      .then(
        () => {
          alert("Email envoyé. Nous vous repondrons dans les instant à suivre")
        },
        (error) => {
          alert("Email non  envoyé")
        },
      );
          }else{
            alert("Désolé")
          }
         }else{
          alert("veuillez accepter les conditions de discution")
         }
       } else {
        alert("veuillez remplir tout les formulaires ")
       }
    }
    
    return(
      <div className='contacts' ref={reference}>
        <div style={{marginLeft:18}}>
<h2 style={{textAlign:"left",marginLeft:38}}>Contatez-moi</h2>
  <div>
    <hr  style={{width:100,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
    <hr  style={{width:150,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
    <hr  style={{width:200,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/> 
  </div>
</div>
       <div className='conteneur1'>
        <div className='contact invisible1'>
          <div>
            <p><FontAwesomeIcon icon={faLocationDot} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:"20px",marginRight:"15px"}}  />ADRESSE</p>
            <p>Ville de CALAVI , Arconville</p>
          </div>
          <hr style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}/>
          <div>
            <p><FontAwesomeIcon icon={faPhone} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:"20px",marginRight:"15px"}}  />TELEPHONE</p>
            <p><a href="tel:+22968364255" style={{textDecoration:"none",color:"black"}}>(+229) 68364255</a></p>
          </div>
          <hr style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}/>
          <div>
            <p><FontAwesomeIcon icon={faEnvelope} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:"20px",marginRight:"15px"}}  />E-mail</p>
            <p><a href="mailto:abnegko@gmail.com" style={{textDecoration:"none",color:"black"}}>abnegko@gmail.com</a></p>
          </div>
           <hr style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}/>
          <div>
            <p><FontAwesomeIcon icon={faClock} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:"20px",marginRight:"15px"}}  />Horraires</p>
            <p>accessible 24/7</p>
          </div>
          <hr style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}/>
          
        </div>
        
          <div className='formulaire_de_contact invisible3'>
            <form ref={form}>
          <div><span style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}><FontAwesomeIcon icon={faUser} style={{color:"white",fontSize:"20px",marginTop:"10px"}}  /></span><input   type="text" name="nom" onChange={nom} id="" placeholder='Nom / Prénom'/></div>
          <div><span style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}><FontAwesomeIcon icon={faMailBulk} style={{color:"white",fontSize:"20px",marginTop:"10px"}}  /></span><input  type="email" name="email" onChange={nom} id="" placeholder='E-mail'/></div>
          <div><span style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}><FontAwesomeIcon icon={faPhone} style={{color:"white",fontSize:"20px",marginTop:"10px"}}  /></span><input  type="tel" name="telephone"  onChange={nom} id="" placeholder='Téléphone'/></div>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Merci de  détaillé  le plus possible votre besoin afin de faciliter nos futurs échanges ' onChange={nom} ></textarea>
          <input type="checkbox" name="acceptcheckbox" id="" checked={condition} onChange={nom} /><p>En soumettant cet formulaire , j'accepte que les informations saisie soit exploité dans le cadre de la demande de contact et de la relaction commerciale qui peut en découlé</p>
          <div><span style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}><FontAwesomeIcon icon={faLock} style={{color:"white",fontSize:"20px",marginTop:"10px"}}  /></span><input  type="number" name="verification" onChange={nom} id="" placeholder='5+4=?'/></div>
          <button onClick={affichag} style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`, border:`solid 1px ${`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}`}}>Envoyer</button>
        </form>
        </div>
        
        
       </div>
  
  
       <div className='conteneur2' style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
        <div className='reseau'>
  
           <div className='invisible1 c1'>
            <h3>DEVELOPPEUR INFORMATIQUE INDEPENDANT</h3>
            <p><span>Developpeur web fullstack & d'application mobile (android & ios)</span>, je suis à votre disposition pour répondre à tout type de projets de <span>création de site internet de developpement spécifique ,d'application web , d'apllication mobile.</span> </p>
            <p><span>Pasionné par les technologies de developpement web et d'application , je mets mes compétences au service de vos besoins dans vos divers domaines .</span></p>
           </div>
  
           <div className='invisible2 c2'>
            <h3>ABED NEGO KODJAOU</h3>
            <p><FontAwesomeIcon icon={faLocationDot} style={{color:"white",fontSize:"20px",marginRight:"15px"}}  />45 , allée des grives 83390 cuers</p>
            <p><a href="tel:+22968364255"><FontAwesomeIcon icon={faPhone} style={{color:"white",fontSize:"20px",marginRight:"15px"}}  />+229 68364255</a></p>
            <p><a href="mailto:abnegko@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color:"white",fontSize:"20px",marginRight:"15px"}}  />abnegko@gmail.com</a></p>
            <p><a href="https://www.facebook.com/abednego.kodjaou?locale=fr_FR"><FontAwesomeIcon icon={faFacebook} style={{color:"white",fontSize:"20px",marginRight:"15px"}}  />Devkan</a></p>
            <p><a href="https://wa.me/+22968364255"><FontAwesomeIcon icon={faWhatsapp} style={{color:"white",fontSize:"20px",marginRight:"15px"}}  />Devkan</a></p>
            <p><a href="/"><FontAwesomeIcon icon={faLink} style={{color:"white",fontSize:"20px",marginRight:"15px"}}  />Devkan.com</a></p>
            </div>
  
        </div>
        </div>
  
        <div className='footer' style={{textAlign:"center",backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(0.9)})`}}>
           <p>COPYRIGHT @2024</p>
        </div> 
      </div>
    )
  }
  