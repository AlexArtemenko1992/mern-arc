import "./ModalPortal.scss";
import { createPortal } from "react-dom";
import UserLoingForm from "../../components/UserLoginForm/UserLoginForm";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const textAnimation = {
  hidden: (custom) => ({
    // y: -100,
    opacity: 0,
    transition: { delay: custom * 0.3 },
    // display: "none",
  }),
  visible: (custom) => ({
    // y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
    // zIndex: 0,
    // display: "block",
  }),
};

const Modal = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch({ type: "HIDE_PORTAL" });
  };

  return (
    <motion.div
      onClick={onClickHandler}
      initial="hidden"
      // whileInView="visible"
      animate={{ opacity: 1 }}
      variants={textAnimation}
      custom={2}
      className="modal"
    >
      <UserLoingForm />
    </motion.div>
  );
};

const Portal = ({ children }) => {
  const node = document.createElement("div");
  node.classList.add("modal-portal");

  return createPortal(children, document.body.appendChild(node));
};

const ModalPortal = () => {
  return (
    <Portal>
      <Modal />
    </Portal>
  );
};

export default ModalPortal;
