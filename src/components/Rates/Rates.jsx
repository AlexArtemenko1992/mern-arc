import "./Rates.scss";
import { motion } from "framer-motion";
import Container from "../../global/Container/Container";
import { useRef } from "react";
import ModalPortal from "../../global/ModalPortal/ModalPortal";
import { useSelector, useDispatch } from "react-redux";

const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Rates = () => {
  const itemRef = useRef();
  const isShowPortal = useSelector((state) => state.portalReducer.isShowPortal);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SHOW_PORTAL" });
  };

  return (
    <motion.div
      className="rates"
      id="rates"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      animate={1}
      // id="courses"
    >
      <Container>
        <motion.h3
          custom={1}
          variants={textAnimation}
          className="rates-main__title"
        >
          Тарифи на навчання:
        </motion.h3>

        <div className="rates-wrapper">
          <motion.div
            className="rates-wrapper__item"
            custom={1}
            variants={textAnimation}
            ref={itemRef}
          >
            {/* <div className={`rates-numeric rates-numeric_${1}`}>{`№${1}`}</div> */}
            <div className="rates-title">Facebook</div>
            <div className="rates-subtitle">
              Середній заробіток після закінчення курсу - 1400$/місяць
            </div>
            <div className="rates-text">Курс у запису</div>
            <div className="rates-text">Доступ до 20 уроків</div>
            <div className="rates-text">Гнучкий графік навчання</div>
            <div className="rates-text">Зручна LMS платформа</div>
            <div className="rates-text">Круті спікери-практики</div>
            <div className="rates-text">Підтримка закритого ком'юніті</div>
            <div className="rates-text">Фідбек від менторів</div>
            <div className="rates-text">100$ депозит на рекламну кампанію</div>
            <div className="rates-text">
              Безкоштовний доступ до всіх інструментів команди
            </div>
            <div className="rates-text">
              4 індивідуальних годинних консультацій сам на сам з ментором
            </div>

            <div className="rates-price">
              299
              <span className="currency">$</span>
            </div>
            <button
              onClick={onClickHandler}
              data-id={1}
              className="rates-button"
            >
              Записатися на курс
            </button>
          </motion.div>

          <motion.div
            className="rates-wrapper__item"
            custom={2}
            variants={textAnimation}
            ref={itemRef}
          >
            {/* <div className={`rates-numeric rates-numeric_${2}`}>{`№${2}`}</div> */}
            <div className="rates-title">Tik-tok</div>
            <div className="rates-subtitle">
              Середній заробіток після закінчення курсу - 1400$/місяць
            </div>
            <div className="rates-text">Курс у запису</div>
            <div className="rates-text">Доступ до 20 уроків</div>
            <div className="rates-text">Гнучкий графік навчання</div>
            <div className="rates-text">Зручна LMS платформа</div>
            <div className="rates-text">Круті спікери-практики</div>
            <div className="rates-text">Підтримка закритого ком'юніті</div>
            <div className="rates-text">Фідбек від менторів</div>
            <div className="rates-text">100$ депозит на рекламну кампанію</div>
            <div className="rates-text">
              Безкоштовний доступ до всіх інструментів команди
            </div>
            <div className="rates-text">
              4 індивідуальних годинних консультацій сам на сам з ментором
            </div>

            <div className="rates-price">
              299
              <span className="currency">$</span>
            </div>
            <button
              onClick={onClickHandler}
              data-id={2}
              className="rates-button"
            >
              Записатися на курс
            </button>
          </motion.div>

          <motion.div
            className="rates-wrapper__item"
            custom={3}
            variants={textAnimation}
            ref={itemRef}
          >
            {/* <div className={`rates-numeric rates-numeric_${2}`}>{`№${2}`}</div> */}
            <div className="rates-title">Facebook + Tik-tok</div>
            <div className="rates-subtitle">
              Середній заробіток після закінчення курсу - 2000$/місяць
            </div>
            <div className="rates-text">Курс у запису</div>
            <div className="rates-text">Доступ до 40+ уроків</div>
            <div className="rates-text">Гнучкий графік навчання</div>
            <div className="rates-text">Зручна LMS платформа</div>
            <div className="rates-text">Круті спікери-практики</div>
            <div className="rates-text">Підтримка закритого ком'юніті</div>
            <div className="rates-text">Фідбек від менторів</div>
            <div className="rates-text full">
              100$ депозит на рекламну кампанію
            </div>
            <div className="rates-text full">
              Безкоштовний доступ до всіх інструментів команди
            </div>
            <div className="rates-text full">
              4 індивідуальних годинних консультацій сам на сам з ментором
            </div>

            <div className="rates-price">
              549
              <span className="currency">$</span>
            </div>
            <button
              onClick={onClickHandler}
              data-id={3}
              className="rates-button"
            >
              Записатися на курс
            </button>
          </motion.div>
        </div>
      </Container>
      {isShowPortal && <ModalPortal />}
    </motion.div>
  );
};
export default Rates;
