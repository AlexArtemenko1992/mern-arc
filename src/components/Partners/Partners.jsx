import "./Partners.scss";
import { motion } from "framer-motion";
import { ReactComponent as GloryIcon } from "../../assets/glory-partners-icon.svg";
import Container from "../../global/Container/Container";
import { Link } from "react-router-dom";

const textAnimation = {
  hidden: (custom) => ({
    x: -100,
    opacity: 0,
    transition: { delay: custom * 0.1 },
    // display: "none",
  }),
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
    zIndex: 0,
    // display: "block",
  }),
};

const partnersMock = [
  { id: 1, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 2, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 3, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 4, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 5, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 6, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 7, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 8, Icon: GloryIcon, link: "https://glory.partners/" },
];

const Partners = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="partners"
    >
      <motion.h3
        custom={1}
        variants={textAnimation}
        className="partners-main__title"
      >
        Наші партнери
      </motion.h3>
      <Container>
        <div className="partners-list">
          {partnersMock.map(({ id, Icon, link }) => (
            <motion.div
              custom={id + 1}
              variants={textAnimation}
              key={id}
              className="partners-list__item"
            >
              <Link to={link}>
                <Icon />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};

export default Partners;
