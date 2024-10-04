import React,{useEffect}  from 'react'
import "./tarifs.css"


export default function Tarifs({reference}) {
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
      <div className='tarifs' ref={reference}>
        <h1 className='invisible'>TARIFS</h1>
        <h2 className='invisible'>Un tarif adapté à vos projets</h2>
        <hr className='hr invisible'/>
        <div className='tarif'>
          <div className='standard invisible1'>
            <h3>SITE VITRINE STANDARD</h3>
            <hr />
            <h4>A PARTIR DE</h4>
            <h1>2000 €</h1>
            <hr />
            <h5>Développé sous WORDPRESS</h5>
            <span>(outils de gestion de contenu)</span>
            
            <div><p>Charte graphique avec une marquette prédéfinir</p></div>
            <div><p>Selection d'une pallette de couleur</p></div>
            <div><p>Domaine+hebergement+email pendant 12mois</p></div>
            <div><p>Interface administrateur standard</p></div>
            <div><p>Site responsive (adapté à tout supports)</p></div>
            <div><p>Mise en place du contenu (Textes & images)</p></div>
            <div><p>Formulaire de contact</p></div>
            <div><p>Lien de partage sur les réseaux sociaux</p></div>
            <div><p>Optimisation du référencement</p></div>
            <div><p>Statistiques de visite</p></div>
            <div><p>Mise en ligne du site</p></div>
            <div><p>Formation utilisation du site</p></div>
            <button>DEMANDER UN DEVIS</button>
          </div>
  
          <div className='personnelle invisible2'>
            <h3>SITE VITRINE PERSONNALISE</h3>
            <hr />
            <h4>A PARTIR DE</h4>
            <h1>2500 €</h1>
            <hr />
            <h5>Développé sur mesure </h5>
            <span>(codage à la main)</span>
            
            <div><p>Création charte graphique personnalisé</p></div>
            <div><p>Proposition de logo</p></div>
            <div><p>Domaine+hebergement+email pendant 12mois</p></div>
            <div><p>Interface administrateur sur mesure</p></div>
            <div><p>Site responsive (adapté à tout supports)</p></div>
            <div><p>Mise en place du contenu (Textes & images)</p></div>
            <div><p>Formulaire de contact & map</p></div>
            <div><p>Lien de partage sur les réseaux sociaux</p></div>
            <div><p>Optimisation du référencement</p></div>
            <div><p>Statistiques de visite</p></div>
            <div><p>Mise en ligne du site</p></div>
            <div><p>Formation utilisation du site</p></div>
            <button>DEMANDER UN DEVIS</button>
          </div>
  
          <div className='e-commerce invisible3'>
            <h3>PLATEFORME E-COMMERCE</h3>
            <hr />
            <h4>A PARTIR DE</h4>
            <h1>3000 €</h1>
            <hr />
            <h5>Développé sous WORDPRESS</h5>
            <span>(outils de gestion de contenu)</span>
            
            <div><p>Carte graphique avec une marquette prédéfinir</p></div>
            <div><p>Selection d'une pallette de couleur</p></div>
            <div><p>Domaine+hebergement+email pendant 12mois</p></div>
            <div><p>Interface administrateur standard</p></div>
            <div><p>Site responsive (adapté à tout supports)</p></div>
            <div><p>Mise en place du contenu (Textes & images)</p></div>
            <div><p>Formulaire de contact</p></div>
            <div><p>Lien de partage sur les réseaux sociaux</p></div>
            <div><p>Optimisation du référencement</p></div>
            <div><p>Statistiques de visite</p></div>
            <div><p>Mise en ligne du site</p></div>
            <div><p>Formation utilisation du site</p></div>
            <button>DEMANDER UN DEVIS</button>
          </div>
  
          <div className='maintenance invisible4'>
            <h3>FORFAIT MAINTENANCE</h3>
            <hr/>
            <h4>50€/heure</h4>
            <h1>500€/an</h1>
            <hr />
            <h5>Mise à jour site internet & plugins</h5>
            <span>(outils de gestion de contenu)</span>
            
            <div><p>Carte graphique avec une marquette prédéfinir</p></div>
            <div><p>Selection d'une pallette de couleur</p></div>
            <div><p>Domaine+hebergement+email pendant 12mois</p></div>
            <div><p>Interface administrateur standard</p></div>
            <div><p>Site responsive (adapté à tout supports)</p></div>
            <div><p>Mise en place du contenu (Textes & images)</p></div>
            <div><p>Formulaire de contact</p></div>
            <div><p>Lien de partage sur les réseaux sociaux</p></div>
            <div><p>Optimisation du référencement</p></div>
            <div><p>Statistiques de visite</p></div>
            <div><p>Mise en ligne du site</p></div>
            <div><p>Formation utilisation du site</p></div>
            <button>DEMANDER UN DEVIS</button>
          </div>
  
          
        </div>
      </div>
    )
  }