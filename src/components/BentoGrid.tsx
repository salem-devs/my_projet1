import styles from './BentoGrid.module.css';

const items = [
  {
    title: "Edge Performance",
    description: "Lightning-fast loading speeds across the globe with our optimized edge network.",
    size: "large",
    icon: "⚡"
  },
  {
    title: "Secure by Design",
    description: "Military-grade encryption for all your data and interactions.",
    size: "small",
    icon: "🛡️"
  },
  {
    title: "Seamless Integration",
    description: "Connect your favorite tools with one click.",
    size: "small",
    icon: "🔌"
  },
  {
    title: "Future Ready",
    description: "Built with the latest technologies to ensure your project stays ahead of the curve.",
    size: "medium",
    icon: "🚀"
  }
];

export default function BentoGrid() {
  return (
    <section id="features" className={styles.container}>
      <h2 className={styles.sectionTitle}>Engineered for <span className="text-gradient">Excellence</span></h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.card} ${styles[item.size]}`}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
            <div className={styles.glow}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
