import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import cn from "classnames";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  name: string;
}

export const Input = ({
  type = "text",
  placeholder,
  name,
  className,
  ...props
}: IInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={cn([styles.input], className)}
      {...props}
    />
  );
};
