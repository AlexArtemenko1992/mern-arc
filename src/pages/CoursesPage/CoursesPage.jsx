import "./CoursesPage.scss";
import { motion } from "framer-motion";

const CoursesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      style={{ textAlign: "center" }}
      className="courses-page"
    >
      <div className="courses-list">
        <div>Facebook</div>
        <div>Tik-Tok</div>
      </div>
    </motion.div>
  );
};

export default CoursesPage;
