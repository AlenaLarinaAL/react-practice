import styles from "./Container.module.css";

export default function Container({ title, children }) {
  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
