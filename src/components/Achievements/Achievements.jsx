import "./Achievements.scss";

import { Container } from "../";

import { motion } from "framer-motion";

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
    transition: { delay: custom * 0.2 },
    zIndex: 0,
    // display: "block",
  }),
};

const Achievements = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="achievements-block"
    >
      <Container>
        <div className="achievements-content__wrapper">
          <motion.h2
            custom={1}
            variants={textAnimation}
            className="achievements__title"
          >
            Наші досягнення
          </motion.h2>
          <motion.div className="achievements-list">
            <motion.div
              custom={2}
              variants={textAnimation}
              className="achievements-list__item"
            >
              <div className="achievements__sum">196</div>
              <div className="achievements__text">
                Підготували більше 200 баєрів
              </div>
            </motion.div>
            <motion.div
              custom={3}
              variants={textAnimation}
              className="achievements-list__item"
            >
              <div className="achievements__sum">93%</div>
              <div className="achievements__text">
                Середній бал наших студентів
              </div>
            </motion.div>
            <motion.div
              custom={4}
              variants={textAnimation}
              className="achievements-list__item"
            >
              <div className="achievements__sum">3</div>
              <div className="achievements__text">
                Доступні напрями для проходження
              </div>
            </motion.div>
            <motion.div
              custom={5}
              variants={textAnimation}
              className="achievements-list__item"
            >
              <div className="achievements__sum">100%</div>
              <div className="achievements__text">
                Наших студентів знаходять роботу після навчання на протязі 2
                тижнів
              </div>
            </motion.div>
            <motion.div
              custom={6}
              variants={textAnimation}
              className="achievements-list__item"
            >
              <div className="achievements__sum">30</div>
              <div className="achievements__text">
                студентів проходять навчання прямо зараз
              </div>
            </motion.div>
            <motion.div
              custom={7}
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
      </Container>
    </motion.div>
  );
};

export default Achievements;
