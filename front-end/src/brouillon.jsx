import React,{useEffect, useState} from 'react'
import "./portofolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faCalendar, faEarListen, faLink, faGlobe, faEye, faHeart} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { red,green,blue,opacity } from './colors'


export default function   Portofolio({reference}) {
  const active={
    backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`
  }
  const [projects,setproject]=useState([])
  const [projectdetails,setprojectdetails]=useState([])
  const [typeproject,settypeproject]=useState("all")
  let projectdetailsid=null

  
  useEffect(()=>{
   axios.get("http://localhost:3001/projects")
   .then(result=>setproject(result.data))
   .catch(err=>console.log(err))
  },[])
    function projectdetailsopen(e) {
        document.querySelector(".detailsProject").style.marginRight="0px"
        projectdetailsid=e.target.parentNode.getAttribute("numberproject")
        axios.post("http://localhost:3001/projectdetails",{projectdetailsid})
        .then(result=>setprojectdetails(result.data[0])) 
         .catch(err=>console.log(err))
      }
      function projectdetailsclose() {
          document.querySelector(".detailsProject").style.marginRight="-1000px"
      }
    function effetall() {
      settypeproject("all")
      document.querySelector(".all").classList.add("active")
      document.querySelector(".web").classList.remove("active")
      document.querySelector(".mob").classList.remove("active")
      

      document.querySelector(".all").style.backgroundColor=`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`
      document.querySelector(".web").style.backgroundColor="white"
      document.querySelector(".mob").style.backgroundColor="white"
    }
    function effetmob() {
      settypeproject("mobile")
      document.querySelector(".mob").classList.add("active")
      document.querySelector(".web").classList.remove("active")
      document.querySelector(".all").classList.remove("active")


      document.querySelector(".mob").style.backgroundColor=`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`
      document.querySelector(".web").style.backgroundColor="white"
      document.querySelector(".all").style.backgroundColor="white"
    }
    
    function effetweb() {
      settypeproject("web")
      document.querySelector(".web").classList.add("active")
      document.querySelector(".all").classList.remove("active")
      document.querySelector(".mob").classList.remove("active")


      document.querySelector(".web").style.backgroundColor=`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`
      document.querySelector(".all").style.backgroundColor="white"
      document.querySelector(".mob").style.backgroundColor="white"
      
    }
    
    function survole(e){
      let elementsurvoler=e.target.parentNode.id
      let cible=document.getElementById(`${elementsurvoler}`).childNodes[0]
      cible.style.transition="1s"
      let getimageproject=cible.getAttribute("imageproject")
      cible.style.background="linear-gradient(rgba(175, 34, 34,0.4),rgba(175, 34, 34,0.4)),"+getimageproject
    }
    function nosurvole(e) {
      let elementsurvoler=e.target.parentNode.id
      let cible=document.getElementById(`${elementsurvoler}`).childNodes[0]
      let getimageproject=cible.getAttribute("imageproject")
      cible.style.background=getimageproject
    }
    
    
  
  
  
function Project(props) {
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
     if (typeproject==="all") {
      return(
        <div className='projet'>
            {projects.map((project,indexprojects)=>{
            return(
             
              <div  id={'project'+project.id} className='invisible' key={indexprojects}  onClick={props.clickproject} numberproject={project.id}  style={{width:600,height:300, background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('home.png') center/cover no-repeat",borderRadius:5,marginTop:50,cursor:"pointer"}} >
            <div style={{marginTop:250}}>
              <div style={{width:"100%",background:"transparent",display:"flex",justifyContent:"center",gap:20}}>
              <FontAwesomeIcon  icon={faEye}  style={{ fontSize:20,cursor:"pointer",opacity:0.4,color:"white",transition:"1s"}} />
              <FontAwesomeIcon  icon={faHeart}  style={{ fontSize:20,cursor:"pointer",opacity:0.4,color:"white",transition:"1s"}} />
              <FontAwesomeIcon  icon={faLink}  style={{ fontSize:20,cursor:"pointer",opacity:0.4,color:"white",transition:"1s"}} />
            </div>
            </div>
            </div>
            
            
               )
            })}
            

            

            

            

            
        </div>
      )
     }else if(typeproject==="web"){
      return(
        <div className='projet'>
          
          {projects.map((project,indexprojects)=>{
            if (project.typeproject==="DEVELOPPEMENT WEB") {
               return(
            <div id={'project'+project.id} className='invisible' key={indexprojects} onMouseMove={survole} onMouseOut={nosurvole} onClick={props.clickproject} numberproject={project.id} >
              <div className='image_projet' imageproject={"url(projectimages/"+project.imageproject+") no-repeat center/contain"} style={{background:"url(projectimages/"+project.imageproject+") no-repeat center/contain"}}></div>
              <h3>{project.nameproject}</h3>
              <h4>{project.typeproject}</h4>


              
            </div>
            
               )
            }
            })}

        </div>
      )
     }else{
      return(
        <div className='projet'>
            {projects.map((project,indexprojects)=>{
            if (project.typeproject==="DEVELOPPEMENT MOBILE") {
               return(
            <div id={'project'+project.id} className='invisible' key={indexprojects} onMouseMove={survole} onMouseOut={nosurvole} onClick={props.clickproject} numberproject={project.id} >
              <div className='image_projet' imageproject={"url(projectimages/"+project.imageproject+") no-repeat center/contain"} style={{background:"url(projectimages/"+project.imageproject+") no-repeat center/contain"}}></div>
              <h3>{project.nameproject}</h3>
              <h4>{project.typeproject}</h4>
            </div>
               )
            }
            })}
        </div>
      )
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
      return(
        <div className='portofolio' ref={reference}>
          <div className='btn-container'>
              <div style={{width:200}}>

              <div style={{marginLeft:35}}>
              <h2 style={{textAlign:"left",marginLeft:38}}>Projets</h2>
                <div>
                  <hr  style={{width:100,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <hr  style={{width:150,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/>
                  <hr  style={{width:200,height:5,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,marginLeft:40}}/> 
                </div>
              </div>
                
                            
              </div>
              
    </div> 
          <div className='btn-projet invisible4'>
            <span className='active all'  onClick={effetall} style={active}>TOUS LES PROJETS</span>
            <span className='web'  onClick={effetweb}>DEVELOPPEMENT WEB</span>
            <span className='mob'  onClick={effetmob}>DEVELOPPEMENT MOBILE</span>
          </div>
        {
        <div className='detailsProject'>
          <div className='headerdetailsProject'>
            <FontAwesomeIcon  icon={faXmark}  style={{ fontSize:30,marginLeft:-100,cursor:"pointer",color:"white"}} onClick={projectdetailsclose}/>
            <h3>{projectdetails.nameproject}</h3>
          </div>
          <hr />
          <div className='imagesdetailsProject'>
            <img src={"projectimages/"+projectdetails.image1project} alt="" />
            <img src={"projectimages/"+projectdetails.image2project} alt="" />
          </div>
          <div className='technologiesdetailsProject'>
            <div>
              <h3>{projectdetails.typeproject}</h3>
              <p style={{minHeight:"95px",maxHeight:"95px"}}>{projectdetails.descriptionproject}</p>
              
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Conception graphique & webdisign (canvas)</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Integration HTML CSS</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Developper sous React.js et node.js</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Dynamise et animation par javascript</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Conception graphique & webdisign (canvas)</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Integration HTML CSS</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Developper sous React.js et node.js</p>
              <p><FontAwesomeIcon icon={faCalendar}   style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Dynamise et animation par javascript</p>
            </div>
            <div>
              <h3>INFOT PROJET</h3>
              <p><FontAwesomeIcon  icon={faCalendar}  style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Année : {projectdetails.annéeproject}</p>
              <p><FontAwesomeIcon  icon={faEarListen}  style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>Catégorie : {projectdetails.typeproject}</p>
              <p><FontAwesomeIcon  icon={faLink}  style={{ fontSize:15,marginRight:10,cursor:"pointer",color:"white"}}/>lien : <a href="http://Devkan.com">{projectdetails.lienproject}</a></p>
              <hr />
              <p className='techs'>
              {
                projectdetails.id ? projectdetails.technologiesproject.split(',').map((tech)=>{
                  return <span>{tech}</span>
                })
                :""
              }
              
              </p>
            </div>
          </div>
        </div> }
          <Project clickproject={projectdetailsopen} />
        </div>
      )
    }