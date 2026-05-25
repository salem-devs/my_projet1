import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/logokleencar.png"
              alt="KleenCar Logo"
              width={180}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className={styles.brandDesc}>
            L'excellence du lavage automobile à domicile. Nous transformons votre temps en brillance.
          </p>
          <div className={styles.socials}>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className={styles.links}>
          <h4>Navigation</h4>
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#testimonials">Avis</a>
          <a href="#">Réserver</a>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <span>+243 890 000 000</span>
          </div>
          <div className={styles.contactItem}>
            <Mail size={18} />
            <span>contact@kleencar.cd</span>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={18} />
            <span>Kinshasa, RDC</span>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Kleen Car. Tous droits réservés.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Mentions Légales</a>
          <a href="#">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
