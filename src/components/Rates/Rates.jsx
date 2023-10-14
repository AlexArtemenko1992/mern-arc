import "./Rates.scss";
import { motion } from "framer-motion";
import Container from "../../global/Container/Container";
import { useRef } from "react";
import ModalPortal from "../../global/ModalPortal/ModalPortal";
import { useSelector, useDispatch } from "react-redux";

const ratesPlan = [
  {
    id: "rate-tt",
    num: 1,
    title: "Tik-tok",
    subtitle: "Середній заробіток після закінчення курсу - 1400$/місяць",
    lessons: 20,
    course: "Тік-ток",
    advantage: "Telegram-ком`юніті",
    price: 299,
  },
  {
    id: "rate-fb",
    num: 2,
    title: "Facebook",
    subtitle: "Середній заробіток після закінчення курсу - 1700$/місяць",
    lessons: 20,
    course: "Facebook",
    advantage: "Telegram-ком`юніті",
    price: 299,
  },
  {
    id: "rate-tt+fb",
    num: 3,
    title: "Tik-tok + Facebook",
    subtitle: "Середній заробіток після закінчення курсу від - 2000$/місяць",
    lessons: 40,
    course: "Facebook та Тік-ток",
    advantage: "Приватний Telegram-канал",
    price: 549,
  },
];

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
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      animate={1}
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
          {ratesPlan.map(
            ({
              id,
              num,
              title,
              subtitle,
              lessons,
              course,
              advantage,
              price,
            }) => (
              <motion.div
                className="rates-wrapper__item"
                id={num}
                custom={num + 1}
                variants={textAnimation}
                ref={itemRef}
                key={id}
              >
                <div
                  className={`rates-numeric rates-numeric_${num}`}
                >{`№${num}`}</div>
                <div className="rates-title">{`Напрям: ${title}`}</div>

                <div className="rates-subtitle">{subtitle}</div>
                <hr />
                <div className="rates-lessons">
                  Кількість уроків: <span>{lessons}</span>
                </div>
                <div className="rates-course">
                  Джерело: <span>{course}</span>
                </div>
                <div className="rates-advantage">{advantage}</div>
                <div className="rates-price">
                  {price}
                  <span className="currency">$</span>
                </div>
                <button
                  onClick={onClickHandler}
                  data-id={id}
                  className="rates-button"
                >
                  Записатися на курс
                </button>
              </motion.div>
            )
          )}
        </div>
      </Container>
      {isShowPortal && <ModalPortal />}
    </motion.div>
  );
};
export default Rates;
