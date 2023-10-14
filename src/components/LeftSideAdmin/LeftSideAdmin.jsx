import styles from "./LeftSideAdmin.module.scss";
import { AdminStats } from "../";

const LeftSideAdmin = () => {
  return (
    <div className={styles["left-side__admin"]}>
      <AdminStats />
    </div>
  );
};

export default LeftSideAdmin;
