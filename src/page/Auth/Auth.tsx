import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
import { Logo } from "../../components/Logo/Logo";
import { AuthExecutor } from "../../components/Forms/AuthForm/AuthExecutor/AuthExecutor";
import cn from "classnames";
import { useState } from "react";

export const Auth = () => {
  const [isExecutor, setIsExecutor] = useState<boolean>(true);

  const handleToggle = () => {
    setIsExecutor(!isExecutor);
  };

  return (
    <div className={styles["container-left"]}>
      {/* Лого */}

      <Logo />

      {/* Контент */}
      <div>
        {/* Заголовок */}
        <div className={styles.title}>
          <span>Добро пожаловать!</span>
          <h1>Войти</h1>
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

        <AuthExecutor />

        {/* Есть ли аккаунт? */}
        <div className={styles.text}>
          <p>
            Нет аккаунта? &nbsp;
            <Link className="link" to="/register">
              Зарегистрироваться
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
