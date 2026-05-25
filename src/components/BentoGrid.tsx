import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, Zap, Waves, Wind, Timer } from 'lucide-react';
import styles from './BentoGrid.module.css';

const services = [
  {
    title: "Lavage Intérieur Premium",
    description: "Nettoyage en profondeur des sièges, tapis et plastiques avec produits antibactériens.",
    icon: <Droplets />,
    size: "large",
    color: "#00e5ff",
    border:"black",
    image: "https://images.unsplash.com/photo-1599250300435-08e9ca619f62?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Protection Céramique",
    description: "Protection longue durée contre les UV et la saleté avec un fini miroir.",
    icon: <ShieldCheck />,
    size: "small",
    color: "#7000ff",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Quick Wash Express",
    description: "Lavage extérieur complet en moins de 30 minutes.",
    icon: <Timer />,
    size: "small",
    color: "#ff00c8",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Detailing Extérieur",
    description: "Décontamination ferreuse, polissage léger et cire de protection haute brillance.",
    icon: <Waves />,
    size: "medium",
    color: "#00ff88",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function BentoGrid() {
  return (
    <section id="services" className={styles.container}>
      <div className={styles.header}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.topTitle}
        >
          NOS SERVICES
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.mainTitle}
        >
          L'excellence dans chaque <span className="text-gradient">détail</span>.
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${styles.card} ${styles[service.size]}`}
          >
            <div className={styles.imageOverlay}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardGlow} style={{ backgroundColor: service.color }}></div>
            <div className={styles.iconContainer} style={{ color: service.color }}>
              {service.icon}
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <span>Découvrir</span>
              <Zap size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
