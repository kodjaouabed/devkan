import React,{ useRef ,useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faBook, faBriefcase, faCommentSms, faCommentDollar, faCommentDots} from '@fortawesome/free-solid-svg-icons'
import { Typewriter } from 'react-simple-typewriter';
import { red,green,blue,opacity } from './colors'
import ContactUs from './contactUs';
import { motion } from 'framer-motion';




import Portofolio from './portofolio';
import Header from './header';
import Evolutivite from './evolutivité';
import Nav from './nav';
import Service from './service';
import Tarifs from './tarifs';
import Apropos from './apropos';
import Contact  from './contact';
import Experiences from './experiences';
import Technologies from './technologies';
import './App.css';
import { colors } from './colors';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function App() {
  const sectionhome = useRef(null);
  const sectionService = useRef(null);
  const sectionCompetences = useRef(null);
  const sectionportofolio = useRef(null);
  const sectiontarifs = useRef(null);
  const sectionapropos = useRef(null);
  const sectioncontact = useRef(null);

  const refhome=useRef(null)
  const refservice=useRef(null)
  const refcompetences=useRef(null)
  const refportofolio=useRef(null)
  const refapropos=useRef(null)
  const refcontact=useRef(null)



  function callbackobserver(entries,observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.className==="background") {
          document.querySelector(".ihome").style.fontSize="40px" 
          document.querySelector(".iservice").style.fontSize="20px" 
          document.querySelector(".iportofolio").style.fontSize="20px" 
          document.querySelector(".iapropos").style.fontSize="20px"
          document.querySelector(".icontact").style.fontSize="20px"
        } 
        if (entry.target===refservice.current) {
          document.querySelector(".ihome").style.fontSize="20px" 
          document.querySelector(".iservice").style.fontSize="25px" 
          document.querySelector(".iportofolio").style.fontSize="20px" 
          document.querySelector(".iapropos").style.fontSize="20px"
          document.querySelector(".icontact").style.fontSize="20px"
        }
        if (entry.target===refportofolio.current) {
          document.querySelector(".ihome").style.fontSize="20px" 
          document.querySelector(".iservice").style.fontSize="20px" 
          document.querySelector(".iportofolio").style.fontSize="25px" 
          document.querySelector(".iapropos").style.fontSize="20px"
          document.querySelector(".icontact").style.fontSize="20px"
        }
        if (entry.target===refapropos.current) {
          document.querySelector(".ihome").style.fontSize="20px" 
          document.querySelector(".iservice").style.fontSize="20px" 
          document.querySelector(".iportofolio").style.fontSize="20px" 
          document.querySelector(".iapropos").style.fontSize="25px"
          document.querySelector(".icontact").style.fontSize="20px"
        }
        if (entry.target===refcontact.current) {
          document.querySelector(".ihome").style.fontSize="20px" 
          document.querySelector(".iservice").style.fontSize="20px" 
          document.querySelector(".iportofolio").style.fontSize="20px" 
          document.querySelector(".iapropos").style.fontSize="20px"
          document.querySelector(".icontact").style.fontSize="25px"
        }
      }
    });
  }
  
 
    
   

    
    
  

  

  const [chargement,setchargement]=useState(false)

  window.addEventListener("scroll",()=>{
  if (window.scrollY>=40) {
    document.querySelector(".navbars").style.position="fixed"
    document.querySelector(".navbars").style.backgroundColor="white"
    document.querySelector(".navbars").style.top=0
    document.querySelector(".navbars").style.paddingTop="10px"
  }else{
    document.querySelector(".navbars").style.position="relative"
    document.querySelector(".navbars").style.backgroundColor="transparent"
    document.querySelector(".navbars").style.paddingTop="0px"
  }
})

/*window.addEventListener("scroll",()=>{
  //console.log(window.scrollY)
  if (window.scrollY>=0 && window.scrollY<=972) {
    document.querySelector(".lienhome").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".lienhome").style.borderBottom="transparent"
  }
  if (window.scrollY>=973 && window.scrollY<=2800) {
    document.querySelector(".lienservices").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".lienservices").style.borderBottom="transparent"
  }
  if (window.scrollY>=2801 && window.scrollY<=3530) {
    document.querySelector(".liencompetences").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".liencompetences").style.borderBottom="transparent"
  }

  if (window.scrollY>=3531 && window.scrollY<=6500) {
    document.querySelector(".lienportofolio").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".lienportofolio").style.borderBottom="transparent"
  }
  if (window.scrollY>=6501 && window.scrollY<=8600) {
    document.querySelector(".lientarifs").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".lientarifs").style.borderBottom="transparent"
  }
  if (window.scrollY>=8601 && window.scrollY<=9730) {
    document.querySelector(".lienapropos").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".lienapropos").style.borderBottom="transparent"
  }
  if (window.scrollY>=9731 && window.scrollY<=12000) {
    document.querySelector(".liencontact").style.borderBottom="5px solid rgb(170, 16, 16)"
  }else{
    document.querySelector(".liencontact").style.borderBottom="transparent"
  }
})*/


function home(e) {
  e.preventDefault()
  sectionhome.current.scrollIntoView({ behavior: 'smooth' });
}
function service(e) {
  e.preventDefault()
  sectionService.current.scrollIntoView({ behavior: 'smooth' });
}
function servicescroll() {
  sectionService.current.scrollIntoView({ behavior: 'smooth' });
}
function competences(e) {
  e.preventDefault()
  sectionCompetences.current.scrollIntoView({ behavior: 'smooth' });
}
function competencesscroll() {
  sectionCompetences.current.scrollIntoView({ behavior: 'smooth' });
}
function portofolio(e) {
  e.preventDefault()
  sectionportofolio.current.scrollIntoView({ behavior: 'smooth' });
}
function portofolioscrolll() {
  sectionportofolio.current.scrollIntoView({ behavior: 'smooth' });
}

function tarifs(e) {
  e.preventDefault()
  sectiontarifs.current.scrollIntoView({ behavior: 'smooth' });
}
function tarifsscroll() {
  sectiontarifs.current.scrollIntoView({ behavior: 'smooth' });
}

function apropos(e) {
  e.preventDefault()
  sectionapropos.current.scrollIntoView({ behavior: 'smooth' });
}
function aproposscroll() {
  sectionapropos.current.scrollIntoView({ behavior: 'smooth' });
}
function contact(e) {
  e.preventDefault()
  sectioncontact.current.scrollIntoView({ behavior: 'smooth' });
}
function contactscroll() {
  sectioncontact.current.scrollIntoView({ behavior: 'smooth' });
}


function Scrollbtn() {
   /*window.addEventListener("scroll",()=>{
    if (window.scrollY>=0 && window.scrollY<200) {
      document.querySelector(".ihome").style.fontSize="25px" 
      document.querySelector(".iservice").style.fontSize="20px" 
      document.querySelector(".iportofolio").style.fontSize="20px" 
      document.querySelector(".iapropos").style.fontSize="20px"
      document.querySelector(".icontact").style.fontSize="20px"
    }else if (window.scrollY>=200 && window.scrollY<2274) {
      document.querySelector(".ihome").style.fontSize="20px" 
      document.querySelector(".iservice").style.fontSize="25px" 
      document.querySelector(".iportofolio").style.fontSize="20px" 
      document.querySelector(".iapropos").style.fontSize="20px"
      document.querySelector(".icontact").style.fontSize="20px"
    }else if (window.scrollY>=2274 && window.scrollY<3067) {
      document.querySelector(".ihome").style.fontSize="20px" 
      document.querySelector(".iservice").style.fontSize="20px" 
      document.querySelector(".iportofolio").style.fontSize="25px" 
      document.querySelector(".iapropos").style.fontSize="20px"
      document.querySelector(".icontact").style.fontSize="20px"
    }
   })
  */
  
  function scrollbtn() {
    if (window.scrollY>=0 && window.scrollY<200) {
      document.querySelector(".container_scrollbtn").style.transform="translate(180px)" 
    }
    if (window.scrollY>=200 && window.scrollY<2274) {
      competencesscroll()
    }
    if (window.scrollY>=2274 && window.scrollY<3067) {
      portofolioscrolll()
    }
    if (window.scrollY>=3067 && window.scrollY<4256) {
      tarifsscroll()
    }
    if (window.scrollY>=4256 && window.scrollY<=5572) {
      aproposscroll()
    }
    if (window.scrollY>=5572 && window.scrollY<6800) {
      contactscroll()
    }
  }
  return (
   
    <div className='scrollbtn' style={{minHeight:"40px",backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}} >
    <a href="https://wa.me/+22968364255"><FontAwesomeIcon className="ihome" icon={faWhatsapp}     style={{color:"white",fontSize:40,border:"1px solid transparant",borderRadius:50}} /></a>
    </div>
  )
}

useEffect(() => {

  setTimeout(() => {
    setchargement(true)
  }, 2000);
 
 

  
},[]);

  if (chargement) {
    return (
      <div>
      
      <div className="App" ref={sectionhome}>
        <Evolutivite />
        {/* <Header refhome={sectionhome} />*/}
        
        <Nav clickhome={home}  clickservice={service} clickcompetences={competences} clickportofolio={portofolio} clicktarifs={tarifs} clickapropos={apropos} clickcontact={contact}  clicksavoir={apropos} navacceuil={home} navservice={service} navcompetence={competences} navportofolio={portofolio} navtarifs={tarifs} navapropos={apropos} navcontact={contact} />
        <div className='background'>
        <div className='info'>
          <div>
            <motion.p
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className='moi' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
              Abed nego kodjaou , Propulseur numériques
             </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='typewriter' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
               <Typewriter
                words={['REACT DEVELOPPEUR','DEVELOPPEUR INFORMATIQUE', "DEVELOPPEUR FULLSTACK" ,"DEVELOPPEUR D'APPLICATION WEB","DEVELOPPEUR D'APPLICATION MOBILE"]}
                loop={100}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={18500}
              />
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='conteneur_button'>
              <button className="downloadcv" type="button" style={{borderWidth:1,borderColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderStyle:"solid"}}><a href="devkan.png" download="devkan.png" style={{textDecoration:"none",color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>Telecharger mon cv</a></button>
              <button className="lienapropos" type="button" style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderWidth:1,borderColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderStyle:"solid"}} onClick={aproposscroll}>A propos de moi</button>
            </motion.div>
          
          </div>
          
  
         </div>
         
        </div>
        <div className='backgroundresponsive'></div>
        <div className='inforesponsive'>
        <div className='info'>
          <div>
            <motion.p
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className='moi' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
              Abed nego kodjaou , Propulseur numériques
             </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='typewriter' style={{color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>
               <Typewriter
                words={['REACT DEVELOPPEUR','DEVELOPPEUR INFORMATIQUE', "DEVELOPPEUR FULLSTACK" ,"DEVELOPPEUR D'APPLICATION WEB","DEVELOPPEUR D'APPLICATION MOBILE"]}
                loop={100}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={18500}
              />
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='conteneur_button'>
              <button className="downloadcv" type="button" style={{borderWidth:1,borderColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderStyle:"solid"}}><a href="devkan.png" download="devkan.png" style={{textDecoration:"none",color:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`}}>Telecharger mon cv</a></button>
              <button className="lienapropos" type="button" style={{backgroundColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderWidth:1,borderColor:`rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})`,borderStyle:"solid"}} onClick={aproposscroll}>A propos de moi</button>
            </motion.div>
          
          </div>
          
  
         </div>
        </div>
        <Scrollbtn/>
        <Experiences/>
        <Service reference={sectionService} ref={refservice} />
        <Technologies reference={sectionCompetences} ref={refcompetences}/>
        <Portofolio reference={sectionportofolio} ref={refportofolio} />
        {/*<Tarifs reference={sectiontarifs} /> */}
        
        <Apropos reference={sectionapropos} ref={refapropos} />
        <Contact reference={sectioncontact} ref={refcontact} />
        
      </div>
      </div>
    );
  } else {
    return(
      <div class="containeur_chargement">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <span>
      <img src="devkan.png" alt="" style={{width:200,height:200}} />
      </span>
    </div>
    )
  }
}

export default App;
