import React,{useEffect} from 'react'
import "./apropos.css"
import { colors } from './colors'
import  apropos from "./pngtree-frustrated-girl-point-with-finger-at-something-young-person-show-vector-png-image_49030176-removebg-preview.png"
import { red,green,blue,opacity } from './colors'



export default function Apropos({reference}) {
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
      <div className='apropos' ref={reference} style={{marginTop:100}}>
        <div style={{width:200}}>

<div style={{marginLeft:18}}>
<h2 style={{textAlign:"left",marginLeft:38}}>A propos</h2>
  <div>
    <hr  style={{width:100,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
    <hr  style={{width:150,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
    <hr  style={{width:200,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/> 
  </div>
</div>
  
              
</div>
<div className='propos' style={{marginTop:100,flexWrap:"wrap"}}>
 <div className='proposbackground' style={{borderRadius:10,backgroundPositionY:0}}></div>
  <div className='propostexte'>
    <p style={{textAlign:'justify'}}>
    Je m'appelle Abed-Négo Kodjaou, un développeur web et mobile passionné, spécialisé en React JS et React Native. Avec plusieurs années d'expérience dans la création d'applications modernes, intuitives et performantes, j'aide les entreprises à transformer leurs idées en solutions numériques efficaces.
    </p>
    <p style={{textAlign:'justify'}}>
    Ma passion pour le développement est née durant mes études, où j'ai eu l'opportunité de travailler sur divers projets, aussi bien web que mobiles. Lors de ma soutenance, j'ai présenté un projet de gestion scolaire, ce qui a renforcé mon expertise dans la gestion de projets complexes et à grande échelle.
    </p>
    <p style={{textAlign:'justify'}}>
    Je mets un point d'honneur à développer des applications bien structurées, avec un code propre et maintenable. J'aime collaborer avec des équipes multidisciplinaires, relever des défis techniques et veiller à ce que chaque projet réponde parfaitement aux besoins des utilisateurs.

Si vous recherchez un développeur passionné, rigoureux, et capable de donner vie à vos projets web ou mobiles, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles collaborations et défis techniques.
    </p>
    </div>
</div>
      
</div>
    )
  }