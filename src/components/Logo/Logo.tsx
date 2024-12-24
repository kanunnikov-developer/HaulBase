import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      <img src="Logo.svg" alt="Logo" className={styles.image} />
      <div className={styles.title}>
        <h2>HaulBase</h2>
        <span>Перевозки</span>
      </div>
    </div>
  );
};
