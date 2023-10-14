import styles from "./AdminStatsItem.module.scss";

const AdminStatsItem = ({ title, sum }) => {
  return (
    <div className={styles["admin-stats__item"]}>
      <h2 className={styles["stats-item__title"]}>{title}</h2>
      <h3 className={styles["stats-item__sum"]}>{sum}</h3>
    </div>
  );
};

export default AdminStatsItem;
