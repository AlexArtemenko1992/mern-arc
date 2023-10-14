import { BgVideoHomePage, Container } from "../../components";
import "./Top.scss";
import { motion } from "framer-motion";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as TiktokIcon } from "../../assets/tiktok-icon.svg";

// const textAnimation = {
//   hidden: (custom) => ({
//     x: -100,
//     opacity: 0,
//     transition: { delay: custom * 0.4 },
//   }),
//   visible: (custom) => ({
//     x: 0,
//     opacity: 1,
//     transition: { delay: custom * 0.4 },
//   }),
// };

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
    transition: { delay: custom * 0.4 },
    // zIndex: 0,
    // display: "block",
  }),
};

const Top = () => {
  return (
    <div
      // inherit="hidden"
      // whileInView="visible"
      // animate={{ opacity: 1 }}
      className="top"
    >
      <BgVideoHomePage>
        <Container>
          <motion.div
            custom={1}
            variants={textAnimation}
            className="top-content__wrapper"
          >
            <motion.h1
              custom={1}
              variants={textAnimation}
              className="top__title"
            >
              Курси з арбітражу трафіку
            </motion.h1>
            <motion.h2
              custom={2}
              variants={textAnimation}
              className="top__subtitle"
            >
              Вибери свій напрям
              <span className="way-group">
                <FacebookIcon /> <span className="way-text">чи</span>{" "}
                <TiktokIcon />
              </span>
            </motion.h2>
          </motion.div>
        </Container>
      </BgVideoHomePage>
    </div>
  );
};

export default Top;
