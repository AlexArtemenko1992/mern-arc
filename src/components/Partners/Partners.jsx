import "./Partners.scss";
import { motion } from "framer-motion";
import { ReactComponent as GloryIcon } from "../../assets/glory-partners-icon.svg";
import { ReactComponent as IGaming } from "../../assets/igaming-icon.svg";
import { ReactComponent as PinUpIcon } from "../../assets/pin-up-partners.svg";
import { ReactComponent as WpIcon } from "../../assets/wp-partners.svg";
import { ReactComponent as Bro } from "../../assets/bro-icon.svg";
import { ReactComponent as TraffLab } from "../../assets/trafflab.svg";
import PPartenrs from "../../assets/profitov-partners-icon.png";
import MyBet from "../../assets/my-bet-icon.png";
import MostBet from "../../assets/most-bet.png";
import ClickLeads from "../../assets/click-leads.png";

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
  { id: 0, Icon: GloryIcon, link: "https://glory.partners/" },
  { id: 1, Icon: IGaming, link: "https://lgaming.com/" },
  { id: 2, Icon: PinUpIcon, link: "https://pin-up.partners/" },
  { id: 3, Icon: WpIcon, link: "https://welcome.partners/" },
  { id: 4, Icon: Bro, link: "https://cpabro.vip/" },
  { id: 5, Icon: TraffLab, link: "https://trafflab.io/en/" },
];

const Partners = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="partners"
    >
      <Container>
        <motion.h3
          custom={1}
          variants={textAnimation}
          className="partners-main__title"
        >
          Наші партнери
        </motion.h3>
        <div className="partners-list">
          {partnersMock.map(({ id, Icon, link }) => (
            <motion.div
              custom={id + 1}
              variants={textAnimation}
              key={id}
              id={`icon-${id}`}
              className="partners-list__item"
            >
              <Link target="_blank" to={link}>
                <Icon />
              </Link>
            </motion.div>
          ))}

          <motion.div
            custom={6}
            variants={textAnimation}
            className="partners-list__item"
          >
            <Link target="_blank" to="https://mrbet.partners/">
              <img src={MyBet} alt="my-bet" />
            </Link>
          </motion.div>
          <motion.div
            custom={7}
            variants={textAnimation}
            className="partners-list__item"
          >
            <Link target="_blank" to="https://mostbet.partners/">
              <img src={MostBet} alt="most-bet" />
            </Link>
          </motion.div>

          <motion.div
            variants={textAnimation}
            custom={8}
            className="partners-list__item ppartners"
          >
            <Link target="_blank" to="https://aff.profitov.partners/v2/sign/in">
              <img src={PPartenrs} alt="ppartners" />
            </Link>
          </motion.div>
          <motion.div
            custom={9}
            variants={textAnimation}
            className="partners-list__item"
          >
            <Link target="_blank" to="https://clicklead.network/">
              <img className="click-leads" src={ClickLeads} alt="click-leads" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Partners;
