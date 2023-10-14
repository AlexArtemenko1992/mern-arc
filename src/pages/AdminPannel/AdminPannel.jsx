import styles from "./AdminPannel.module.scss";
import { LeftSideAdmin, AdminTabs } from "../../components";

const AdminPannel = () => {
  return (
    <div className={styles["admin-pannel"]}>
      <LeftSideAdmin />
      <AdminTabs />
    </div>
  );
};

export default AdminPannel;
