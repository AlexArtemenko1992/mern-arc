import "./Areas.scss";
import Container from "../../global/Container/Container";
import Carousel from "../Carousel/Carousel";
import { ReactComponent as Facebook } from "../../assets/facebook-courses.svg";
import { ReactComponent as TikTok } from "../../assets/tik-tok-courses.svg";

const images = [
  {
    id: 1,
    text: "Використовувати Facebook для арбітражу — гарний варіант для того, щоб залучити клієнтів та завоювати їхню довіру. Так само, соціальна мережа дозволить вам встановити зв'язок із потенційним покупцем, що піде вам на руку. Арбітражникам-початківцям буде зручно працювати з Facebook, тому як отримати цільовий трафік можна безкоштовно",
    Image: Facebook,
  },
  {
    id: 2,
    text: "ТікТок в арбітражі трафіку – одне з найперспективніших джерел. Соціальна мережа з кожним днем набирає популярності, а в 2021 році, згідно з даними дослідження Sensor Tower, обійшла Facebook за кількістю завантажень програми. Щодня платформу відвідує понад 1 млрд людей у всьому світі, тому для арбітражу TikTok – незвідане поле для реалізацій.",
    Image: TikTok,
  },
];

const Areas = () => {
  return (
    <div className="areas">
      <Container>
        <h3 className="areas-title">Чому саме ці напрями?</h3>
        <div className="areas-content">
          <Carousel images={images} />
        </div>
      </Container>
    </div>
  );
};

export default Areas;
