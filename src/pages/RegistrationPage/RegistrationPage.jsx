import { UserLoginForm } from "../../components";
import "./RegistrationPage.scss";
import { motion } from "framer-motion";

const RegistrationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="registration-page"
    >
      <UserLoginForm isRegistration />
    </motion.div>
  );
};

export default RegistrationPage;
