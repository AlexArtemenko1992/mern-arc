import styles from "./AdminStats.module.scss";
import { AdminStatsItem } from "../";

const AdminStats = () => {
  const items = [
    { id: 1, title: "Зарегистрировано", sum: 20 },
    { id: 2, title: "Пакет: Facebook", sum: 5 },
    { id: 3, title: "Пакет: Tik-tok", sum: 5 },
    { id: 4, title: "Пакет: Facebook+TikTok", sum: 10 },
    { id: 5, title: "На общую сумму:", sum: "5000$" },
  ];

  return (
    <div className={styles["admin-stats"]}>
      {items.map(({ id, title, sum }) => (
        <AdminStatsItem key={id} title={title} sum={sum} />
      ))}
    </div>
  );
};

export default AdminStats;
