import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight, Star } from 'lucide-react';
import styles from './BookingCta.module.css';

export default function BookingCta() {
  return (
    <section className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={styles.glassCard}
      >
        <div className={styles.content}>
          <div className={styles.tag}>
            <Star size={14} fill="currentColor" />
            <span>Offre de Lancement</span>
          </div>
          <h2 className={styles.title}>
            Prêt pour un véhicule <br />
            <span className="text-gradient">comme neuf ?</span>
          </h2>
          <p className={styles.desc}>
            Réservez votre créneau aujourd'hui et profitez de 10% de réduction sur votre premier lavage premium. 
            Nos experts se déplacent chez vous avec tout l'équipement nécessaire.
          </p>
          <div className={styles.actions}>
            <button className="btn-primary">
              <Calendar size={18} /> Réserver maintenant
            </button>
            <button className="btn-secondary">
              <Phone size={18} /> Nous appeler
            </button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.floatingBadges}>
            <div className={`${styles.badge} ${styles.b1}`}>✨ Showroom Shine</div>
            <div className={`${styles.badge} ${styles.b2}`}>🛡️ Protection UV</div>
            <div className={`${styles.badge} ${styles.b3}`}>🚐 À Domicile</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
