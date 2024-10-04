import React, { useState ,useEffect} from 'react'
import { red,green,blue,opacity } from './colors'
import axios from 'axios'
import './experiences.css'
import { colors } from './colors'
export default function Experiences() {
    const [projets,setprojets]=useState(-1)
    const [annéesexperiences,setannéesexperiences]=useState(0)
    const [satisfaction,setsatisfaction]=useState(0)
    const [experiences,setexperiences]=useState([])

    useEffect(() => {
       axios.get("https://devkan.vercel.app/experiences")
       .then(resulats=>setexperiences(resulats.data[0]))
       .catch(error=>console.log(error))
       const timerprojets= setInterval(() => { 
            if (projets>experiences.nbr_projets-1) {
                clearInterval(timerprojets)
            }else{
                setprojets(projets=>projets+1)
            }
        }, 100);

        const timerannéesexperiences= setInterval(() => {
            
            if (annéesexperiences>experiences.annéesexperiences-1) {
                clearInterval(timerannéesexperiences)
            }else{
                setannéesexperiences(annéesexperiences=>annéesexperiences+1)
            }
        }, 100);

        const timersatisfaction= setInterval(() => {
            
            if (satisfaction>experiences.satisfaction-1) {
                clearInterval(timersatisfaction)
            }else{
                setsatisfaction(satisfaction=>satisfaction+1)
            }
        }, 100);

        
        return () => {
                clearInterval(timerprojets)
                clearInterval(timerannéesexperiences)
                clearInterval(timersatisfaction)
         };  
        
        
        
    }, [projets,annéesexperiences,satisfaction]);
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
    <div>
        <div className="experiences">
            <div  className='invisible1' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
                <h2> {projets}+</h2>
                <p>Projets freelance réalisés</p>
            </div>
            <div  className='invisible2' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
                <h2>{annéesexperiences}+</h2>
                <p>Années d'expériences</p>
            </div>
            <div  className='invisible3' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
                <h2>{satisfaction}%</h2>
                <p>Satisfaction</p>
            </div>
        </div>
    </div>
  )
}
