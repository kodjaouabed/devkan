import React ,{useEffect} from 'react'
import "./services.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMobile,faGlobe,faPaintbrush,faServer, faTools, faSearch} from '@fortawesome/free-solid-svg-icons'
import { red,green,blue,opacity } from './colors'



export default function Service({reference}) {
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
    return(
      <div className='services' ref={reference}>
          <div className='btn-container invisible'>
              <div style={{width:200}}>

              <div style={{marginLeft:18}}>
              <h2 style={{textAlign:"left",marginLeft:38}}>Services</h2>
                <div>
                  <hr  style={{width:100,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <hr  style={{width:150,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <hr  style={{width:200,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/> 
                </div>
              </div>
                
                            
              </div>
              
          </div>     
        <div className='service-contenu invisible1'>
          <div className='service-contenu1'>
          
                <div style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderRadius:5,marginTop:50,textAlign:"center"}}>
                <FontAwesomeIcon icon={faGlobe} style={{ fontSize:30,cursor:"pointer",marginTop:30,color:"white"}}/>
                <h4 style={{color:"white",fontSize:20}}>Conception de sites web</h4>
                <p style={{width:"80%",margin:"auto",color:"white",textAlign:"center",fontSize:14.5}}>Je conçois des sites web sur mesure avec  des technologies modernes comme HTML5, CSS3, JavaScript et des frameworks front-end et backend comme React Js , Node Js ... , je garantis des sites performants, adaptatifs et esthétiques.</p>
                </div>

                
                <div style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderRadius:5,marginTop:50,textAlign:"center"}}>
                <FontAwesomeIcon icon={faMobile} style={{ fontSize:30,cursor:"pointer",marginTop:30,color:"white"}}/>
                <h4 style={{color:"white",fontSize:20}}>Conception d'app mobile</h4>
                <p style={{width:"80%",margin:"auto",color:"white",textAlign:"center",fontSize:14.5}}>Je crée des applications mobiles natives (Android/iOS) et hybrides, en utilisant des technologies telles que React Native et Node Js, pour offrir des expériences fluides et intuitives sur tous types de dispositifs mobiles.</p>
                </div>

                <div style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderRadius:5,marginTop:50,textAlign:"center"}}>
                <FontAwesomeIcon icon={faPaintbrush} style={{ fontSize:30,cursor:"pointer",marginTop:30,color:"white"}}/>
                <h4 style={{color:"white",fontSize:20}}>Conception d’interfaces UI/UX</h4>
                <p style={{width:"80%",margin:"auto",color:"white",textAlign:"center",fontSize:14.5}}>J'assure la conception d'interfaces utilisateur ergonomiques, axées sur l’expérience utilisateur (UX), pour des plateformes esthétiques et faciles à utiliser. Chaque design est responsive, s'adaptant parfaitement aux écrans mobiles, tablettes et ordinateurs.</p>
                </div>


                <div style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderRadius:5,marginTop:50,textAlign:"center"}}>
                <FontAwesomeIcon icon={faServer} style={{ fontSize:30,cursor:"pointer",marginTop:30,color:"white"}}/>
                <h4 style={{color:"white",fontSize:20}}>Intégration d'API</h4>
                <p style={{width:"80%",margin:"auto",color:"white",textAlign:"center",fontSize:14.5}}> Connexion fluide à des services externes via des API REST et GraphQL pour des données en temps réel et des fonctionnalités améliorées.</p>
                </div>


                <div style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderRadius:5,marginTop:50,textAlign:"center"}}>
                <FontAwesomeIcon icon={faSearch} style={{ fontSize:30,cursor:"pointer",marginTop:30,color:"white"}}/>
                <h4 style={{color:"white",fontSize:20}}>Optimisation SEO</h4>
                <p style={{width:"80%",margin:"auto",color:"white",textAlign:"center",fontSize:14.5}}>J'optimise les performances des sites web pour garantir des temps de chargement rapides et une navigation fluide. J'applique également les meilleures pratiques SEO pour améliorer la visibilité des sites sur les moteurs de recherche.</p>
                </div>


                <div style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderRadius:5,marginTop:50,textAlign:"center"}}>
                <FontAwesomeIcon icon={faTools} style={{ fontSize:30,cursor:"pointer",marginTop:30,color:"white"}}/>
                <h4 style={{color:"white",fontSize:20}}>Maintenance et support technique</h4>
                <p style={{width:"80%",margin:"auto",color:"white",textAlign:"center",fontSize:14.5}}>Je propose des services de maintenance continue et de support technique afin d’assurer la stabilité, la sécurité et les mises à jour régulières des sites web et applications mobiles, garantissant leur bon fonctionnement à long terme.</p>
                </div>
                
                
           </div>
        </div>
        
        <div className='service-contenu2 invisible3'>
          
        </div>
      </div>
    )
  }
  