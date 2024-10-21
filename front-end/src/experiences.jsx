import React, { useState, useEffect, useRef } from 'react';
import { red, green, blue, opacity } from './colors';
import './experiences.css';
import { motion } from 'framer-motion';

export default function Experiences() {
  const [projets, setProjets] = useState(0);
  const [annéesexperiences, setAnnéesexperiences] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  const [projetsVisible, setProjetsVisible] = useState(false);
  const [annéesExperiencesVisible, setAnnéesExperiencesVisible] = useState(false);
  const [satisfactionVisible, setSatisfactionVisible] = useState(false);

  const projetsRef = useRef(null);
  const annéesExperiencesRef = useRef(null);
  const satisfactionRef = useRef(null);

  const experiences = { nbr_projets: 10, annéesexperiences: 3, satisfaction: 98 };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === projetsRef.current) {
            setProjetsVisible(true);
          } else if (entry.target === satisfactionRef.current) {
            setSatisfactionVisible(true);
          } else if (entry.target === annéesExperiencesRef.current) {
            setAnnéesExperiencesVisible(true);
          }
        }
      });
    }, options);

    if (projetsRef.current) observer.observe(projetsRef.current);
    if (satisfactionRef.current) observer.observe(satisfactionRef.current);
    if (annéesExperiencesRef.current) observer.observe(annéesExperiencesRef.current);

    return () => {
      if (projetsRef.current) observer.unobserve(projetsRef.current);
      if (satisfactionRef.current) observer.unobserve(satisfactionRef.current);
      if (annéesExperiencesRef.current) observer.unobserve(annéesExperiencesRef.current);
    };
  }, []);

  useEffect(() => {
    let timerProjets, timerAnnéesExperiences, timerSatisfaction;

    if (projetsVisible) {
      timerProjets = setInterval(() => {
        setProjets(prev => {
          if (prev >= experiences.nbr_projets) {
            clearInterval(timerProjets);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }

    if (annéesExperiencesVisible) {
      timerAnnéesExperiences = setInterval(() => {
        setAnnéesexperiences(prev => {
          if (prev >= experiences.annéesexperiences) {
            clearInterval(timerAnnéesExperiences);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }

    if (satisfactionVisible) {
      timerSatisfaction = setInterval(() => {
        setSatisfaction(prev => {
          if (prev >= experiences.satisfaction) {
            clearInterval(timerSatisfaction);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    }

    return () => {
      clearInterval(timerProjets);
      clearInterval(timerAnnéesExperiences);
      clearInterval(timerSatisfaction);
    };
  }, [projetsVisible, annéesExperiencesVisible, satisfactionVisible]);

  return (
    <div>
      <div className="experiences">
        <motion.div
          ref={projetsRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: `rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})` }}
        >
          <h2> {projets}+</h2>
          <p>Projets freelance réalisés</p>
        </motion.div>
        <motion.div
          ref={annéesExperiencesRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: `rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})` }}
        >
          <h2>{annéesexperiences}+</h2>
          <p>Années d'expériences</p>
        </motion.div>
        <motion.div
          ref={satisfactionRef}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: `rgba(${red(175)},${green(34)},${blue(34)},${opacity(1)})` }}
        >
          <h2>{satisfaction}%</h2>
          <p>Satisfaction</p>
        </motion.div>
      </div>
    </div>
  );
}
