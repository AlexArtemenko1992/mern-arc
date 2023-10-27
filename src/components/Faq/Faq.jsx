import { motion } from "framer-motion";

import "./Faq.scss";
import { Accordion, Container } from "../";

const textAnimation = {
  hidden: (custom) => ({
    y: -100,
    opacity: 0,
    transition: { delay: custom * 0.1 },
    // display: "none",
  }),
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
    zIndex: 0,
    // display: "block",
  }),
};

const textAnimationLeft = {
  hidden: (custom) => ({
    x: -100,
    opacity: 0,
    transition: { delay: custom * 0.1 },
    // display: "none",
  }),
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
    zIndex: 0,
    // display: "block",
  }),
};

const Faq = ({ scrollRef }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="faq"
      id="faq"
    >
      <Container>
        <motion.h4
          custom={1}
          variants={textAnimation}
          className="faq-main__title"
        >
          Відповіді на запитання
        </motion.h4>
        <motion.div
          custom={2}
          variants={textAnimationLeft}
          className="faq-wrapper"
        >
          <Accordion />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Faq;
