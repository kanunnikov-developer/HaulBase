import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import styles from "./Home.module.css";

export const Main = () => {
  return (
    <>
      <Menu />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};
