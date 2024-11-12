import React,{useEffect, useState} from 'react'
import "./portofolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faCalendar, faEarListen, faLink, faGlobe, faEye, faHeart, faGear} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { red,green,blue,opacity } from './colors'
import { motion } from 'framer-motion'


export default function   Portofolio({reference}) {
  const active={
    backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`
  }
  const [projects,setproject]=useState([])
  const [projectdetails,setprojectdetails]=useState([])
  const [typeproject,settypeproject]=useState("all")
  let projectdetailsid=null

  
  useEffect(()=>{
   axios.get("https://devkan.vercel.app/projects")
   .then(result=>setproject(result.data))
   .catch(err=>console.log(err))
  },[])
    function projectdetailsopen(e) {
      document.body.classList.toggle('no-scroll')
        document.querySelector(".detailsProject").style.marginRight="0px"
        projectdetailsid=e.currentTarget.getAttribute("numberproject")
        axios.post("https://devkan.vercel.app/projectdetails",{projectdetailsid})
        .then(result=>setprojectdetails(result.data[0])) 
         .catch(err=>console.log(err))
    }
      

      function projectdetailsclose() {
        document.body.classList.toggle('no-scroll')
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
      
     if (typeproject==="all") {
      return(
        <div className='projet'>
            {projects.map((project,indexprojects)=>{
            return(
             
              <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              numberproject={project.id}
              id={'project'+project.id} className='' key={indexprojects}  onClick={props.clickproject}   style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./projectimages/${project.imageproject}') center/cover no-repeat`,borderRadius:5,cursor:"pointer"}} >
                <div style={{ position: "relative", height: "100%" }} >
                 <div style={{ position: "absolute", bottom: 30, width: "100%", background: "transparent", display: "flex", justifyContent: "center", gap: 20 }}>
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faEye} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faHeart} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faLink} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                  </div>
                 </div>
              </motion.div>
            
            
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
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                id={'project'+project.id} className='' key={indexprojects}  onClick={props.clickproject} numberproject={project.id}  style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./projectimages/${project.imageproject}') center/cover no-repeat`,borderRadius:5,cursor:"pointer"}} >
                <div style={{ position: "relative", height: "100%" }}>
                 <div style={{ position: "absolute", bottom: 30, width: "100%", background: "transparent", display: "flex", justifyContent: "center", gap: 20 }}>
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faEye} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faHeart} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faLink} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                  </div>
                 </div>
              </motion.div>
            
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
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                id={'project'+project.id} className='' key={indexprojects}  onClick={props.clickproject} numberproject={project.id}  style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./projectimages/${project.imageproject}') center/cover no-repeat`,borderRadius:5,cursor:"pointer"}} >
                <div style={{ position: "relative", height: "100%" }}>
                 <div style={{ position: "absolute", bottom: 30, width: "100%", background: "transparent", display: "flex", justifyContent: "center", gap: 20 }}>
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faEye} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faHeart} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                    <FontAwesomeIcon onClick={(e) => { e.stopPropagation() }} icon={faLink} style={{ fontSize: 20, cursor: "pointer", color: "white", opacity: 0.4, transition: "1s" }} />
                  </div>
                 </div>
              </motion.div>
               )
            }
            })}
        </div>
      )
     }
    }
    
      return(
        <div className='portofolio' ref={reference}>
          <div className='btn-container'>
              <div style={{width:200}}>

              <div className='section'>
              <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{textAlign:"left",marginLeft:38}}>Portofolio</motion.h2>
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
          <div className='btn-projet'>
            <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='active all'  onClick={effetall} style={active}>TOUS LES PROJETS</motion.span>
            <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='web'  onClick={effetweb}>DEVELOPPEMENT WEB</motion.span>
            <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mob'  onClick={effetmob}>DEVELOPPEMENT MOBILE</motion.span>
          </div>
        {
        <div className='detailsProject' style={{backgroundColor:"white"}}>
          <div className='headerdetailsProject'>
            <FontAwesomeIcon  icon={faXmark}  style={{ fontSize:20,marginLeft:30,cursor:"pointer",color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(0.7)})`}} onClick={projectdetailsclose}/>
          </div>
          <hr />
          <div className='imagesdetailsProject'>
            <img src={"projectimages/"+projectdetails.image1project} alt="" />
            <img src={"projectimages/"+projectdetails.image2project} alt="" />
          </div>
          <div className='technologiesdetailsProject'  style={{marginTop:20}}>
           <div style={{height:100}}>
             <h3>{projectdetails.typeproject}</h3>
             <p><FontAwesomeIcon icon={faGear}   style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>Conception graphique & webdisign ({projectdetails.design})</p>
             <p><FontAwesomeIcon icon={faGear}   style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>Front-end {projectdetails.frontend}</p>
             <p><FontAwesomeIcon icon={faGear}   style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>Backend {projectdetails.backend}</p>
             <p><FontAwesomeIcon icon={faGear}   style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>Dynamise et animation par {projectdetails.dynamisme}</p>
           </div>
           <div style={{height:100}}>
             <h3>INFOT PROJET</h3>
             <p><FontAwesomeIcon  icon={faCalendar}  style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>Année : {projectdetails.annéeproject}</p>
             <p><FontAwesomeIcon  icon={faEarListen}  style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>Catégorie : {projectdetails.typeproject}</p>
             <p><FontAwesomeIcon  icon={faLink}  style={{ fontSize:15,marginRight:10,cursor:"pointer"}}/>lien : <a href="http://Devkan.com">{projectdetails.lienproject}</a></p>
             <hr />
             <p className='techs'>
             {
             projectdetails.id ? projectdetails.technologiesproject.split(',').map((tech)=>{
             return <span style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,color:"white"}}>{tech}</span>
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