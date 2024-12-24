import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: IButton) => {
  return (
    <button className={cn([styles.button], className)} {...props}>
      {children}
    </button>
  );
};
