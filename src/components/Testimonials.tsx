import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const reviews = [
  {
    name: "Marc T.",
    role: "Propriétaire Tesla Model S",
    text: "Une qualité époustouflante. Ils sont venus à mon bureau et ma voiture était plus propre que le jour où je l'ai achetée.",
    stars: 5
  },
  {
    name: "Sarah L.",
    role: "Directrice Marketing",
    text: "Gain de temps incroyable. Le service à domicile est discret et ultra-professionnel. Je recommande les yeux fermés !",
    stars: 5
  },
  {
    name: "Jean-Pierre D.",
    role: "Collectionneur",
    text: "Le traitement céramique est parfait. Une brillance profonde qui dure. L'équipe connaît son métier.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.container}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>⭐ Avis Clients</p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Ce que disent nos <span className="text-gradient">clients</span>.
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={styles.card}
          >
            <Quote className={styles.quoteIcon} size={40} />
            <div className={styles.stars}>
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
              ))}
            </div>
            <p className={styles.text}>"{review.text}"</p>
            <div className={styles.footer}>
              <div className={styles.avatar}>
                {review.name[0]}
              </div>
              <div>
                <h4 className={styles.name}>{review.name}</h4>
                <p className={styles.role}>{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
