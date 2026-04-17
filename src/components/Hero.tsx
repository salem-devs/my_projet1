import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.artContainer}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.badge}>
          {/* <span>V1.0.0 is </span> */}
        </div>
        <h1 className={styles.title}>
          Découvrez le <br />
          <span className="text-gradient">futur c'est maintenenant</span>
        </h1>
        <p className={styles.subtitle}>
          Concevoir des interfaces performantes qui redéfinissent notre façon d'interagir avec le web.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Commencer</button>
          <button className={styles.secondaryBtn}>Voir les Projets</button>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.sphere}></div>
      </div>
    </section>
  );
}
