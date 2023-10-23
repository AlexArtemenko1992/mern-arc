import "./Info.scss";
import Container from "../../global/Container/Container";

const Info = () => {
  return (
    <div className="info">
      <Container>
        <h2 className="info-title">Що ти вивчиш?</h2>
        <div className="info-list">
          <div className="info-item">
            <h3 className="item-title">Вивчиш принципи роботи з додатками</h3>
          </div>
          <div className="info-item">
            <h3 className="item-title">
              Навчишся запускати рекламу та працювати з нею
            </h3>
          </div>
          <div className="info-item">
            <h3 className="item-title">Вивчиш головні джерела трафіку 2023</h3>
          </div>
          <div className="info-item">
            <h3 className="item-title">
              Навчишся знаходити прибуткові зв`язки
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
