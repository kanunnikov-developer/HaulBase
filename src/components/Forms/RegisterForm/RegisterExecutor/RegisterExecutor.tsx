import { Form, Link } from "react-router-dom";
import styles from "./RegisterExecutor.module.css";
import { FormEvent } from "react";
import { Input } from "../../../Input/Input";
import { Button } from "../../../Button/Button";

export const RegisterExecutor = () => {
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
          <label htmlFor="name">Ваше имя:</label>
          <Input id="name" name="name" placeholder="Иван" required />
        </div>
        <div className={styles["input-block"]}>
          <label htmlFor="phone">Номер телефона:</label>
          <Input
            id="phone"
            name="phone"
            placeholder="+7 (961) 245-57-89"
            required
          />
        </div>
      </div>
      <label>
        <input
          type="checkbox"
          className={styles["real-radio"]}
          required
          defaultChecked
        />
        <span className={styles["custom-radio"]}></span>
        <span className={styles["text-radio"]}>
          {"Даю согласие на обработку" + " "}
          <Link className="link" to="/">
            <span style={{ borderBottom: "1px solid var(--link-color)" }}>
              персональных данных
            </span>
          </Link>
        </span>
      </label>
      <Button>Регистрация</Button>
    </Form>
  );
};
