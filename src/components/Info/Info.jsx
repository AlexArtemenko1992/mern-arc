import "./Info.scss";
import Container from "../../global/Container/Container";

const Info = () => {
  return (
    <div className="info" id="info">
      <Container>
        <h2 className="info-title">Що вас чекає?</h2>
        <div className="info-list">
          <div className="info-item">
            <h3 className="item-title">
              Практичні навички. Робота в реальних акаунтах з реальним трафіком
              та бюджетами.
            </h3>
          </div>
          <div className="info-item">
            <h3 className="item-title">
              Всі лектори – практикуючі експерти по роботі з трафіком. Знають
              технічні тонкощі роботи.
            </h3>
          </div>
          <div className="info-item">
            <h3 className="item-title">
              Підтримка менторів, рекомендації для удосконалення скілів та
              швидкого росту.
            </h3>
          </div>
          <div className="info-item">
            <h3 className="item-title">
              Потужний нетворкінг та спілкування в чатах для побудови корисних
              взаємовідносин.
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Info;
