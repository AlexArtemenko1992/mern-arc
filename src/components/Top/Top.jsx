import { Container } from "../../components";
import "./Top.scss";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CountUp from "react-countup";
// import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
// import { ReactComponent as TiktokIcon } from "../../assets/tiktok-icon.svg";

const textAnimation = {
  hidden: (custom) => ({
    y: -100,
    opacity: 0,
    transition: { delay: custom * 0.1 },
  }),
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Top = () => {
  return (
    <div className="top">
      <Container>
        <motion.div
          custom={1}
          variants={textAnimation}
          className="top-content__wrapper"
        >
          <h1 className="top__title_1">
            Почни вивчати сучасну та прибуткову професію
          </h1>
          <h2 className="top__title_2">
            Арбітражник
            <br /> трафіку
          </h2>
          <h3 className="top__subtitle">
            До вашої уваги найбільш популярні
            <br /> напрями для навчання.
          </h3>
          <TypeAnimation
            sequence={[
              "Не зволікай, вперед до мрії <3", // Types 'One'
              3000, // Waits 1s
              "Стань професіоналом у найбільш популярній у 2023 році ніші", // Deletes 'One' and types 'Two'
              3000, // Waits 2s
              "Вперед! ;)", // Types 'Three' without deleting 'Two'
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "14px",
              display: "inline-block",
              color: "#fad049",
            }}
          />
        </motion.div>
      </Container>
      <div className="achievements-list">
        <div className="achievements-list__item">
          <div className="achievements__sum">
            <CountUp end={196} duration={2.1} />
          </div>
          <div className="achievements__text">баєрів підготували</div>
        </div>
        <div className="achievements-list__item">
          <div className="achievements__sum">
            <CountUp end={93} duration={2.3} />%
          </div>
          <div className="achievements__text">
            теорії засвоюють наші студенти
          </div>
        </div>
        <div className="achievements-list__item">
          <div className="achievements__sum">
            <CountUp end={3} duration={2.5} />
          </div>
          <div className="achievements__text">доступні пакети для навчання</div>
        </div>
        <div className="achievements-list__item">
          <div className="achievements__sum">
            <CountUp end={100} duration={2.7} />%
          </div>
          <div className="achievements__text">
            наших студентів знаходять роботу на протязі 2 тижнів
          </div>
        </div>
        <div className="achievements-list__item">
          <div className="achievements__sum">
            <CountUp end={30} duration={2.9} />
          </div>
          <div className="achievements__text">
            студентів проходять навчання прямо зараз
          </div>
        </div>
        <div className="achievements-list__item">
          <div className="achievements__sum">
            <CountUp end={90} duration={3.1} />%
          </div>
          <div className="achievements__text">
            студентів можуть заливати трафік і на Facebook і на Tik-tok
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
