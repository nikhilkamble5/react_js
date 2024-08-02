import styles from "./Container.module.css";
const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Container;

// 5.05 handeling event
