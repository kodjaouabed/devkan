import React,{useState,useEffect} from 'react'
import "./evolutivite.css"
import { red,green,blue,opacity } from './colors'


export default function Evolutivite() {
    const [evolutivite,setevolutivite]=useState(0)
    function sleep() {
       setTimeout(() => {
        document.querySelector(".evolutivite").style.display='none'
        setevolutivite(0)
       }, 100);
        
    }
    useEffect(() => {
       const temp=setInterval(() => {
        if (evolutivite<104) {
          document.querySelector(".evolutivite").style.display="block"
            setevolutivite((previous)=>previous+1)
        }else{
            sleep()
        }
       },200);
       
       return ()=>clearInterval(temp)
    }, [evolutivite]);
  return (
    <div className='conteneurevolutivite'><div className='evolutivite' style={{width:`${evolutivite}%`,backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}></div></div>
  )
  }