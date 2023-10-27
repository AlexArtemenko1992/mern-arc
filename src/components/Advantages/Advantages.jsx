import { motion } from "framer-motion";
import "./Advantages.scss";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TuneIcon from "@mui/icons-material/Tune";
import Container from "../../global/Container/Container";

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

const advantagesMock = [
  {
    id: 1,
    Icon: VideoCameraFrontIcon,
    title: "Офлайн навчання",
    text: "",
  },
  {
    id: 2,
    Icon: OndemandVideoIcon,
    title: "Запис всіх занять",
    text: "Всі заняття розбиті на модулі, це дає можливість вивчати матеріал у необхідній послідовності",
  },
  {
    id: 3,
    Icon: CoPresentIcon,
    title: "Відповіді від менторів",
  },
  {
    id: 4,
    Icon: TuneIcon,
    title: "Доступ до всіх інструментів",
  },
];

const Advantages = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="advantages"
    >
      <Container>
        <motion.h3
          custom={1}
          variants={textAnimation}
          className="advantages-main__title"
        >
          Наші переваги
        </motion.h3>
        <div className="advantages-list">
          {advantagesMock.map(({ id, Icon, title, text }) => {
            return (
              <motion.div
                custom={id + 1}
                variants={textAnimation}
                key={id}
                className="advantages-list__item"
              >
                <Icon />
                <p className="advantages-item__title">{title}</p>
                <p className="advantages-item__text">{text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </motion.div>
  );
};

export default Advantages;
