import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    //ssd
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logokleencar.png"
            alt="KleenCar Logo"
            width={200}
            height={64}
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 12px rgba(0,229,255,0.35))' }}
          />
        </div>

        <div className={styles.desktopLinks}>
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#testimonials">Avis</a>
          <button className="btn-primary">
            Réserver <ArrowRight size={18} />
          </button>
        </div>

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>À propos</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Avis</a>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Réserver <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
