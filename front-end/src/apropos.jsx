import React,{useEffect} from 'react'
import "./apropos.css"
import { colors } from './colors'
import  apropos from "./pngtree-frustrated-girl-point-with-finger-at-something-young-person-show-vector-png-image_49030176-removebg-preview.png"
import { red,green,blue,opacity } from './colors'
import { motion } from 'framer-motion'



export default function Apropos({reference}) {
    return(
      <div className='apropos' ref={reference} style={{marginTop:100}}>
        <div style={{width:200}}>

        <div className='section'>
              <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{textAlign:"left",marginLeft:38}}>A Propos</motion.h2>
                <div>
                  <motion.hr
                   initial={{ opacity: 0, y: 150 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                  style={{width:100,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <motion.hr
                   initial={{ opacity: 0, y: 160 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                  style={{width:150,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <motion.hr 
                   initial={{ opacity: 0, y: 170 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                  style={{width:200,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/> 
                </div>
              </div>
  
              
</div>
<div className='propos' style={{marginTop:100,flexWrap:"wrap"}}>
 <motion.div
  initial={{ opacity: 0, x: -200 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
 className='proposbackground' style={{borderRadius:10,backgroundPositionY:0}}></motion.div>
  <motion.div
   initial={{ opacity: 0, y: 200 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
  className='propostexte'>
    <p style={{textAlign:'left'}}>
    Je m'appelle Abed-Négo Kodjaou, un développeur web et mobile passionné, spécialisé en React JS et React Native. Avec plusieurs années d'expérience dans la création d'applications modernes, intuitives et performantes, j'aide les entreprises à transformer leurs idées en solutions numériques efficaces.
    </p>
    <p style={{textAlign:'left'}}>
    Ma passion pour le développement est née durant mes études, où j'ai eu l'opportunité de travailler sur divers projets, aussi bien web que mobiles. Lors de ma soutenance, j'ai présenté un projet de gestion scolaire, ce qui a renforcé mon expertise dans la gestion de projets complexes et à grande échelle.
    </p>
    <p style={{textAlign:'left'}}>
    Je mets un point d'honneur à développer des applications bien structurées, avec un code propre et maintenable. J'aime collaborer avec des équipes multidisciplinaires, relever des défis techniques et veiller à ce que chaque projet réponde parfaitement aux besoins des utilisateurs.

Si vous recherchez un développeur passionné, rigoureux, et capable de donner vie à vos projets web ou mobiles, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles collaborations et défis techniques.
    </p>
    </motion.div>
</div>
      
</div>
    )
  }