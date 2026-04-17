import Image from 'next/image';
import styles from './BentoGrid.module.css';

const items = [
  {
    title: "Edge Performance",
    description: "Lightning-fast loading speeds across the globe with our optimized edge network.",
    size: "large",
    icon: "⚡",
    image: "/edge.png"
  },
  {
    title: "Secure by Design",
    description: "Military-grade encryption for all your data and interactions.",
    size: "small",
    icon: "🛡️",
    image: "/security.png"
  },
  {
    title: "Seamless Integration",
    description: "Connect your favorite tools with one click.",
    size: "small",
    icon: "🔌",
    image: "/integration.png"
  },
  {
    title: "Future Ready",
    description: "Built with the latest technologies to ensure your project stays ahead of the curve.",
    size: "medium",
    icon: "🚀",
    image: "/edge.png" // Reusing or using placeholder
  }
];

export default function BentoGrid() {
  return (
    <section id="features" className={styles.container}>
      <h2 className={styles.sectionTitle}>Conçu pour l'<span className="text-gradient">Excellence</span></h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.card} ${styles[item.size]}`}>
            {item.image && (
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className={styles.cardImage}
                />
              </div>
            )}
            <div className={styles.cardContent}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
            <div className={styles.glow}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
