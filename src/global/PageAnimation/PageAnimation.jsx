import { motion } from "framer-motion";

const PageAnimation = ({ children }) => {
  return (
    <motion.div animate={{ opacity: 1 }} initial="hidden" whileInView="visible">
      {children}
    </motion.div>
  );
};

export default PageAnimation;
