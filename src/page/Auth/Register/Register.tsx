import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { Logo } from "../../../components/Logo/Logo";
import { RegisterExecutor } from "../../../components/Forms/RegisterForm/RegisterExecutor/RegisterExecutor";
import { useState } from "react";
import cn from "classnames";

export const Register = () => {
  const [isExecutor, setIsExecutor] = useState<boolean>(true);

  const handleToggle = () => {
    setIsExecutor(!isExecutor);
  };

  return (
    <div className={styles["container-left"]}>
      {/* Логотип */}

      <Logo />

      {/* Контент */}
      <div>
        {/* Заголовок */}
        <div className={styles.title}>
          <span>Добро пожаловать!</span>
          <h1>Регистрация</h1>
        </div>

        {/* Переключатель */}
        <div
          className={cn(
            [styles["toogle-buttons"]],
            isExecutor ? [styles.active] : null
          )}
        >
          <button
            className={cn(
              [styles["toogle-button"]],
              isExecutor ? [styles.active] : null
            )}
            onClick={handleToggle}
          >
            Исполнитель
          </button>
          <button
            className={cn(
              [styles["toogle-button"]],
              !isExecutor ? [styles.active] : null
            )}
            onClick={handleToggle}
          >
            Заказчик
          </button>
        </div>

        {/* Форма */}
        <RegisterExecutor />

        {/* Есть ли аккаунт? */}
        <div className={styles.text}>
          <p>
            Уже есть аккаунт? &nbsp;
            <Link className="link" to="/auth">
              Войти
            </Link>
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.faq}>
        <p>FAQ | Поддержка | Тарифы</p>
      </div>
    </div>
  );
};
