import React from 'react'
import "./competences.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faPhp,faLaravel,faPython,faCss3, faHtml5,faJava, faJsSquare} from '@fortawesome/free-brands-svg-icons';

export default function Competences({reference}) {
  
    return(
      <div className='competences' ref={reference}>
         
         <div className='technologies'>
           <div className='html'>
             <div className='tech'>HTML</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faHtml5} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
           <div className='css'>
             <div className='tech'>CSS</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faCss3} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
           <div className='js'>
             <div className='tech'>JavaScript</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faJsSquare} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
           <div className='react'>
             <div className='tech'>React.js & React native</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faReact} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
           <div className='php'>
             <div className='tech'>PHP</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faPhp} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
           <div className='laravel'>
             <div className='tech'>LARAVEL</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faLaravel} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
           <div className='python'>
             <div className='tech'>PYTHON</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faPython} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
           <div className='java'>
             <div className='tech'>JAVA</div>
             <div className='niveau'>
              <div>
              <FontAwesomeIcon icon={faJava} style={{color:"white",marginLeft:"100px"}}  />
              </div>
             </div>
           </div>
  
         </div>
      </div>
    )
  }