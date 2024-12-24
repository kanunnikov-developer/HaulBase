import { Button } from "../../components/Button/Button";
import styles from "./Tariffs.module.css";

export const Tariffs = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Тарифы</h1>
        <p>Автоматическое продление можно отключить в любой момент</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <img
              src="icon-card.jpg"
              alt="icon"
            />
            <p>Базовый</p>
          </div>
          <Button className={styles.btn}>Подключить</Button>
        </div>
        <div className={styles.card}>
          <Button className={styles["btn-accent"]}>
            Попробовать 7 дней бесплатно
          </Button>
        </div>
        <div className={styles.card}>
          <Button className={styles.btn}>Подключить</Button>
        </div>
      </div>
    </>
  );
};
