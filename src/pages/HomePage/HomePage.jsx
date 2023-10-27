import {
  Top,
  PageAnimation,
  Rates,
  Faq,
  Advantages,
  Partners,
  Areas,
  Info,
  Affilate,
  Command,
  Comments,
} from "../../components";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <PageAnimation>
      <Top />
      <Affilate />
      <Info />
      <Command />
      <Advantages />
      <Areas />
      <Rates />
      <Faq />
      <Partners />
      <Comments />
    </PageAnimation>
  );
};

export default HomePage;
