import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Star } from 'lucide-react';
import styles from './Hero.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PanoramaViewer = dynamic(() => import('./PanoramaViewer'), { ssr: false });

const Bubble = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ y: 400, opacity: 0, x: 0 }}
    animate={{ 
      y: -800, 
      opacity: [0, 0.4, 0],
      x: Math.random() * 200 - 100 
    }}
    transition={{ 
      duration: 15 + Math.random() * 10, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear" 
    }}
    className={styles.bubble}
  />
);

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation de flottement automatique (Infini)
      gsap.to(visualRef.current, {
        y: "-=30",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Animation magnétique de la sphère (Réaction souris)
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 50;
        
        gsap.to(visualRef.current, {
          x: xPos,
          duration: 1.5,
          ease: "power3.out"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.panoBackground}>
        <PanoramaViewer imagePath="/360hd.png" />
      </div>
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.bubblesLayer}>
        {[...Array(15)].map((_, i) => (
          <Bubble key={i} delay={i * 2} />
        ))}
      </div>
      <div className={styles.glowOverlay}></div>
      
      <div className={styles.content}>
        

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.title}
        >
          Redéfinissez la <br />
          <span className="text-gradient">Brillance</span> de <br />
          votre véhicule.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          Un service de detailing professionnel qui se déplace chez vous. 
          Performance, précision et perfection pour les automobilistes exigeants.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.actions}
        >
          <button className="btn-primary">
            Réserver maintenant <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">Nos Tarifs</button>
        </motion.div>
      </div>

      <div className={styles.visualContainer}>
        <div ref={visualRef} className={styles.crystalSphere}>
          <div className={styles.glassInner}>
             <img 
               src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop" 
               alt="Luxury Sport Car Detailing" 
               className={styles.heroImage}
             />
             <div className={styles.sphereContent}>
                <Image
                  src="/logokleencar.png"
                  alt="KleenCar"
                  width={130}
                  height={55}
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 16px rgba(0,229,255,0.6)) brightness(1.2)' }}
                />
             </div>
             <div className={styles.reflectionOverlay}></div>
          </div>
          <div className={styles.floatingTag}>
             <Star size={14} fill="currentColor" />
             <span>OFFRE : -20%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
