import React, { useState,useEffect} from 'react'
import "./technologies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faReact,faPhp,faCss3, faHtml5, faJs, faFigma, faGit, faGithub, faNodeJs,faWordpress} from '@fortawesome/free-brands-svg-icons';
import { red,green,blue,opacity } from './colors'


export default function Technologies({reference}) {
   
    
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
    <div className='conteneur' ref={reference}>
    <div className='btn-container'>
              <div style={{width:200}}>

              <div className='section'>
              <h2 style={{textAlign:"left",marginLeft:38}}>Technologies</h2>
                <div>
                  <hr  style={{width:100,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <hr  style={{width:150,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <hr  style={{width:200,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/> 
                </div>
              </div>
                
                            
              </div>
              
    </div> 
               
<div className='conteneur_tech invisible4'>


<div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(408.2*90)/100,strokeDashoffset:(408*90)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faHtml5} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>HTML</p>
  </div>

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*80)/100,strokeDashoffset:(409*80)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faCss3} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>80%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>CSS</p>
  </div>

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*75)/100,strokeDashoffset:(409*75)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faJs} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>75%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>JAVASCRIPT</p>
    
  </div>

</div>















<div className='conteneur_tech invisible4'>

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*75)/100,strokeDashoffset:(409*75)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faReact} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>75%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>REACT JS & NATIVE</p>
    
  </div>

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*75)/100,strokeDashoffset:(409*75)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faNodeJs} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>80%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>NODE JS</p>
    
  </div>


  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*90)/100,strokeDashoffset:(409*90)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faDatabase} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>SQL</p>
  </div>
</div>








<div className='conteneur_tech invisible4'>


  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*90)/100,strokeDashoffset:(409*90)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faFigma} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>Figma</p>
    
  </div>

  

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*90)/100,strokeDashoffset:(409*90)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faGit} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>GIT</p>
    
  </div>

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*90)/100,strokeDashoffset:(409*90)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faGithub} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>GITHUB</p>
    
  </div>

  
</div>















<div className='conteneur_tech invisible4'>
<div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*90)/100,strokeDashoffset:(409*90)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faPhp} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>90%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>PHP</p>
    
  </div>

  <div>
    <svg class="progress-circle" width="150" height="150">
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:"#ddd"}}></circle>
     <circle  cx="75" cy="75" r="65" style={{fill:"none",strokeWidth:15,stroke:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,strokeDasharray:(409*75)/100,strokeDashoffset:(409*75)/100,strokeLinecap:"round",animation:"circle 2s forwards"}}></circle>
    </svg>
    <FontAwesomeIcon icon={faWordpress} style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,fontSize:30}}  />
    <p style={{marginTop:-85,marginRight:15,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>75%</p>
    <p style={{marginTop:80,fontWeight:"bold",fontSize:20,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,textAlign:"center"}}>Wordpress</p>
    
  </div>
</div>


















 



    
    </div>
  )
}

