import { motion } from "framer-motion";

const Page404 = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontSize: "40px",
        color: "red",
      }}
    >
      Page not found
    </motion.h1>
  );
};

export default Page404;
