import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span>V1.0.0 is live</span>
        </div>
        <h1 className={styles.title}>
          Experience the <br />
          <span className="text-gradient">Future of Digital</span>
        </h1>
        <p className={styles.subtitle}>
          Building high-performance, visually stunning interfaces that redefine how we interact with the web.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>View Projects</button>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.sphere}></div>
      </div>
    </section>
  );
}
