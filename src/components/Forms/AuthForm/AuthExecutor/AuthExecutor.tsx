import { Form } from "react-router-dom";
import styles from "./AuthExecutor.module.css";
import { FormEvent } from "react";
import { Input } from "../../../Input/Input";
import { Button } from "../../../Button/Button";

export const AuthExecutor = () => {
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");

    const newUser = {
      name,
      phone,
    };

    console.log(newUser);
    event.currentTarget.reset();
  };

  return (
    <Form className={styles.form} onSubmit={submitForm}>
      <div className={styles["input-form"]}>
        <div className={styles["input-block"]}>
          <label htmlFor="login">Ваше логин / телефон:</label>
          <Input
            id="login"
            name="login"
            placeholder="+7 (961) 245-57-89"
            required
          />
        </div>
        <div className={styles["input-block"]}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
      </div>
      <label>
        <input type="checkbox" className={styles["real-radio"]} required />
        <span className={styles["custom-radio"]}></span>
        <span className={styles["text-radio"]}>Запомнить меня</span>
      </label>
      <Button>Войти</Button>
    </Form>
  );
};
