import React, { useState,useEffect, useRef} from 'react'
import "./technologies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faReact,faPhp,faCss3, faHtml5, faJs, faFigma, faGit, faGithub, faNodeJs,faWordpress} from '@fortawesome/free-brands-svg-icons';
import { red,green,blue,opacity } from './colors'
import { motion } from 'framer-motion';

export default function Technologies({reference}) {
  const html=useRef(null)
  const css=useRef(null)
  const js=useRef(null)
  const react=useRef(null)
  const node=useRef(null)
  const sql=useRef(null)
  const figma=useRef(null)
  const git=useRef(null)
  const github=useRef(null)
  const php=useRef(null)
  const wordpress=useRef(null)
  const [visiblehtml,setvisiblehtml]=useState(false)
  const [visiblecss,setvisiblecss]=useState(false)
  const [visiblejs,setvisiblejs]=useState(false)
  const [visiblereact,setvisiblereact]=useState(false)
  const [visiblefigma,setvisiblefigma]=useState(false)
  const [visiblesql,setvisiblesql]=useState(false)
  const [visiblenode,setvisiblenode]=useState(false)
  const [visiblegit,setvisiblegit]=useState(false)
  const [visiblegithub,setvisiblegithub]=useState(false)
  const [visiblephp,setvisiblephp]=useState(false)
  const [visiblewordpress,setvisiblewordpress]=useState(false)
  
  const options = {
    root: null, // Par défaut, c'est le viewport
    rootMargin: "0px", // Pas de marge
    threshold: 0.5, // Se déclenche quand l'élément est à moitié visible
  }
  function callback(entries,observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target===html.current) {
          setvisiblehtml(true)
        }
        if (entry.target===css.current) {
          setvisiblecss(true)
        }

        if (entry.target===js.current) {
          setvisiblejs(true)
        }

        if (entry.target===react.current) {
          setvisiblereact(true)
        }

        if (entry.target===node.current) {
          setvisiblenode(true)
        }

        if (entry.target===git.current) {
          setvisiblegit(true)
        }
        if (entry.target===github.current) {
          setvisiblegithub(true)
        }
        if (entry.target===figma.current) {
          setvisiblefigma(true)
        }

        if (entry.target===php.current) {
          setvisiblephp(true)
        }

        if (entry.target===wordpress.current) {
          setvisiblewordpress(true)
        }
        if (entry.target===sql.current) {
          setvisiblesql(true)
        }
        
      } else {
        
      }
    });
  }
  const observer=new IntersectionObserver(callback,options)


  useEffect(() => {
    if (html.current) {
      observer.observe(html.current);
    }
    if (css.current) {
      observer.observe(css.current);
    }
    if (js.current) {
      observer.observe(js.current);
    }
    if (react.current) {
      observer.observe(react.current);
    }
    if (node.current) {
      observer.observe(node.current);
    }
    if (sql.current) {
      observer.observe(sql.current);
    }
    if (figma.current) {
      observer.observe(figma.current);
    }
    if (git.current) {
      observer.observe(git.current);
    }
    if (github.current) {
      observer.observe(github.current);
    }
    if (php.current) {
      observer.observe(php.current);
    }
    if (wordpress.current) {
      observer.observe(wordpress.current);
    }
  }, [html,css,js,react,node,sql,figma,git,github,php,wordpress]);

  return (
    <div className='conteneur' ref={reference}>
    <div className='btn-container'>
              <div style={{width:200}}>

              <div className='section'>
              <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{textAlign:"left",marginLeft:38}}>Technologies</motion.h2>
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
              
    </div> 
               
<div className='conteneur_tech'>


<motion.div
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  ref={html} cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 90) / 100,
      strokeDashoffset: visiblehtml ? 0 : (409 * 90) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faHtml5} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>HTML</p>
  </motion.div>

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle ref={css} cx="75" cy="75" r="65" style={{
      
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 80) / 100,
      strokeDashoffset: visiblecss ? 0 : (409 * 80) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faCss3} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>80%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>CSS</p>
  </motion.div>

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  ref={js} cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 75) / 100,
      strokeDashoffset: visiblejs ? 0 : (409 * 75) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faJs} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>75%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>JAVASCRIPT</p>
    
  </motion.div>

</div>















<div className='conteneur_tech'>

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle ref={react}  cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 75) / 100,
      strokeDashoffset: visiblereact ? 0 : (409 * 75) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faReact} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>75%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>REACT JS & NATIVE</p>
    
  </motion.div>

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle ref={node}  cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 75) / 100,
      strokeDashoffset: visiblenode ? 0 : (409 * 75) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faNodeJs} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>80%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>NODE JS</p>
    
  </motion.div>


  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle ref={sql} cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 90) / 100,
      strokeDashoffset: visiblesql ? 0 : (409 * 90) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faDatabase} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>SQL</p>
  </motion.div>
</div>








<div className='conteneur_tech'>


  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  ref={figma} cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 90) / 100,
      strokeDashoffset: visiblefigma ? 0 : (409 * 90) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faFigma} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>Figma</p>
    
  </motion.div>

  

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  ref={git} cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 90) / 100,
      strokeDashoffset: visiblegit ? 0 : (409 * 90) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faGit} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>GIT</p>
    
  </motion.div>

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle ref={github}  cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 90) / 100,
      strokeDashoffset: visiblegithub ? 0 : (409 * 90) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faGithub} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>GITHUB</p>
    
  </motion.div>

  
</div>















<div className='conteneur_tech'>
<motion.div

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle ref={php}  cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 90) / 100,
      strokeDashoffset: visiblephp ? 0 : (409 * 90) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faPhp} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>PHP</p>
    
  </motion.div>

  <motion.div
  

initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  ref={wordpress} cx="75" cy="75" r="65" style={{
      fill: "none",
      strokeWidth: 15,
      stroke: `rgba(175,34,34,1)`,
      strokeDasharray: (409 * 75) / 100,
      strokeDashoffset: visiblewordpress ? 0 : (409 * 75) / 100,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 2s ease-in-out",
     }}></circle>
    </svg>
    <FontAwesomeIcon icon={faWordpress} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>75%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>Wordpress</p>
    
  </motion.div>
</div>


















 



    
    </div>
  )
}

