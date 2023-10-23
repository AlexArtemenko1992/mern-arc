import { Container } from "../../components";
import "./Top.scss";
import { motion } from "framer-motion";
import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as TiktokIcon } from "../../assets/tiktok-icon.svg";

const textAnimation = {
  hidden: (custom) => ({
    y: -100,
    opacity: 0,
    transition: { delay: custom * 0.1 },
  }),
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Top = () => {
  return (
    <div className="top">
      <Container>
        <motion.h1 custom={1} variants={textAnimation} className="top__title">
          Курси з арбітражу
          <br /> трафіку
        </motion.h1>
        <motion.h2
          custom={2}
          variants={textAnimation}
          className="top__subtitle"
        >
          До вашої уваги найбільш популярні
          <br /> напрями для навчання.
          <br />
          <div className="way">
            <FacebookIcon />
            <TiktokIcon />
          </div>
        </motion.h2>
      </Container>
      <motion.div
        custom={2}
        variants={textAnimation}
        className="achievements-list"
      >
        <motion.div
          custom={3}
          variants={textAnimation}
          className="achievements-list__item"
        >
          <div className="achievements__sum">196</div>
          <div className="achievements__text">баєрів підготували</div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimation}
          className="achievements-list__item"
        >
          <div className="achievements__sum">93%</div>
          <div className="achievements__text">
            теорії засвоюють наші студенти
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimation}
          className="achievements-list__item"
        >
          <div className="achievements__sum">3</div>
          <div className="achievements__text">доступні пакети для навчання</div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimation}
          className="achievements-list__item"
        >
          <div className="achievements__sum">100%</div>
          <div className="achievements__text">
            наших студентів знаходять роботу на протязі 2 тижнів
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimation}
          className="achievements-list__item"
        >
          <div className="achievements__sum">30</div>
          <div className="achievements__text">
            студентів проходять навчання прямо зараз
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimation}
          className="achievements-list__item"
        >
          <div className="achievements__sum">90%</div>
          <div className="achievements__text">
            студентів можуть заливати трафік і на Facebook і на Tik-tok
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Top;
