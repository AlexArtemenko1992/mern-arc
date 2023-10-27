import "./Command.scss";
import Container from "../../global/Container/Container";
import CommandImg from "../../assets/command.jpg";

const Command = () => {
  return (
    <div className="command" id="command">
      <Container>
        <h3 className="command-main__title">Наша команда</h3>
        <div className="command-wrapper">
          <div className="command-descr">
            <h4 className="command-subtitle">Ми – практики</h4>
            <p className="command-text">
              Давай знайомитись. Ми – практикуюча арбітражна команда, яка була
              створена у 2015 році. За 8 років ми зросли від 5 ентузіастів до 70
              професійних арбітражників, які горять своєю справою. Ми вчилися на
              власному досвіді, набивали шишки та відточували свої скіли до
              досконалості.
            </p>
            <p className="command-text">
              З розширенням команди ми створили корпоративний освітный курс для
              нових співробітників, щоб звільнити менеджерів від навчання
              стажерів, тим самим оптимізувати робочий час.
            </p>
            <p className="command-text">
              Зважаючи на події в Україні, ми вирішили зробити цей курс
              доступним для кожного, хто вирішив здобути нову перспективну
              професію медіа баєра, стати фінансово незалежним та працювати
              онлайн без прив'язки до місця.
            </p>
            <p className="command-text">
              <b>
                Наша місія – дати українцям, які перебувають у жорстких умовах
                невизначенності, висококласні практичні знання, допомогти з
                працевлаштуванням (відбираємо таланти собі в команду), та
                розвивати українське ком'юніті арбітражників.
              </b>
            </p>
          </div>
          <div className="command-img">
            <img src={CommandImg} alt="command" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Command;
