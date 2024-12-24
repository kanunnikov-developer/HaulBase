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
          <div className={styles.title}>
            <div className={styles.circle}></div>
            <h2>Базовый</h2>
          </div>
          <div className={styles.text}>
            <p>Автоматическое продление можно отключить в любой момент</p>
          </div>
          <div className={styles.price}>
            <p>
              199 ₽<span>/мес</span>
            </p>
          </div>
          <div className={styles.border}></div>
          <div className={styles.advantages}>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Размещение заказов</p>
            </div>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Ускорение времени модерации</p>
            </div>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Отображение рейтинга на заказе</p>
            </div>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Личный чат с заказчиком</p>
            </div>
          </div>
          <Button className={styles.btn}>Подключить</Button>
        </div>

        <div className={styles["accent-card"]}>
          <div className={styles["accent-title"]}>
            <div className={styles['accent-circle']}></div>
            <h2>Стандартный</h2>
          </div>
          <div className={styles["accent-text"]}>
            <p>Автоматическое продление можно отключить в любой момент</p>
          </div>
          <div className={styles.price}>
            <p>
              499 ₽<span>/мес</span>
            </p>
          </div>
          <div className={styles.border}></div>
          <div className={styles.advantages}>
            <div className={styles["advantages-text-accent"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Все из тарифа “Базовый”</p>
            </div>
            <div className={styles["advantages-text-accent"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Ускорение времени модерации</p>
            </div>
            <div className={styles["advantages-text-accent"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Отображение рейтинга на заказе</p>
            </div>
            <div className={styles["advantages-text-accent"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Личный чат с заказчиком</p>
            </div>
            <div className={styles["advantages-text-accent"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Личный чат с заказчиком</p>
            </div>
          </div>
          <Button className={styles["btn-accent"]}>
            Попробовать 7 дней бесплатно
          </Button>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <div className={styles.circle}></div>
            <h2>Расширенный</h2>
          </div>
          <div className={styles.text}>
            <p>Автоматическое продление можно отключить в любой момент</p>
          </div>
          <div className={styles.price}>
            <p>
              1029 ₽<span>/мес</span>
            </p>
          </div>
          <div className={styles.border}></div>
          <div className={styles.advantages}>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Размещение заказов</p>
            </div>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Ускорение времени модерации</p>
            </div>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Отображение рейтинга на заказе</p>
            </div>
            <div className={styles["advantages-text"]}>
              <img src="advantages-icon.svg" alt="icon" />
              <p>Личный чат с заказчиком</p>
            </div>
          </div>
          <Button className={styles.btn}>Подключить</Button>
        </div>
      </div>
    </>
  );
};
