import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import styles from "./Menu.module.css";
import { Button } from "../Button/Button";

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <Logo />
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            О сервисе
          </Link>
        </li>
        <li>
          <Link to="/tariffs" className={styles.link}>
            Тарифы
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Поддержка
          </Link>
        </li>
      </ul>
      <Button className={styles.button} onClick={() => navigate("/auth")}>
        Разместить заказ
      </Button>
    </div>
  );
};
