import { UserLoginForm } from "../../components";
import "./LoginPage.scss";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="login-page"
    >
      <UserLoginForm />
    </motion.div>
  );
};

export default LoginPage;
